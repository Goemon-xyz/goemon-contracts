package main

import (
	"flag"
	"fmt"
	"os"
	"path/filepath"
	"regexp"
	"strings"
	"sync/atomic"
)

type Config struct {
	SourceDir      string
	ExcludeDir     string
	DestinationDir string
}

var filesCount int32

func main() {
	config := parseFlags()
	if err := validateConfig(config); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	if err := processFiles(config); err != nil {
		fmt.Println("Error processing files:", err)
		os.Exit(1)
	}

	fmt.Printf("Total Solidity files processed: %d\n", atomic.LoadInt32(&filesCount))
}

// responsible for setting up and parsing command-line flags for the program
func parseFlags() Config {
	var config Config
	flag.StringVar(&config.SourceDir, "src", "", "Source directory to read .sol files from")
	flag.StringVar(&config.ExcludeDir, "exclude", "", "Directory to exclude from traversal")
	flag.StringVar(&config.DestinationDir, "destination", "", "Destination directory to create .ts files")
	flag.Parse()
	return config
}

// checks if source and destination directories are provided
func validateConfig(config Config) error {
	if config.SourceDir == "" {
		return fmt.Errorf("source directory must be specified")
	}
	if config.DestinationDir == "" {
		return fmt.Errorf("destination directory must be specified")
	}
	return nil
}

// traverses the source directory and processes Solidity files.
func processFiles(config Config) error {
	return filepath.WalkDir(config.SourceDir, func(path string, d os.DirEntry, err error) error {
		if err != nil {
			return err
		}
		// excludes a directory
		if d.IsDir() && d.Name() == config.ExcludeDir {
			return filepath.SkipDir
		}
		if !d.IsDir() && filepath.Ext(d.Name()) == ".sol" {
			return processSolidityFile(path, config)
		}
		return nil
	})
}

// read a solidity file's contents
func processSolidityFile(path string, config Config) error {
	content, err := os.ReadFile(path)
	if err != nil {
		return fmt.Errorf("error reading file %s: %w", path, err)
	}

	if strings.Contains(string(content), "interface ") || strings.Contains(string(content), "abstract ") {
        return nil // Skip processing for interface-only files
    }

	// checks if the file is a solidity library
	if strings.Contains(string(content), "library ") {
		return nil 
		// libraryName, err := extractModuleName(string(content), "library")
		// if err != nil {
		// 	return fmt.Errorf("error extracting library name from %s: %w", path, err)
		// }

		// if err := createDeployModule(path, config, libraryName, "library"); err != nil {
		// 	return fmt.Errorf("error creating deploy files for %s: %w", path, err)
		// }
		// // increment files counter
		// atomic.AddInt32(&filesCount, 1)
	}

	// checks if the file is a solidity contract
	if strings.Contains(string(content), "contract ") {
		
		contractName, err := extractModuleName(string(content), "contract")
		if err != nil {
			return fmt.Errorf("error extracting library name from %s: %w", path, err)
		}
		if err := createDeployModule(path, config, contractName, "contract"); err != nil {
			return fmt.Errorf("error creating deploy files for %s: %w", path, err)
		}
		// increment files counter
		atomic.AddInt32(&filesCount, 1)
	}
	return nil
}

// extract library/contract name from solidity file
func extractModuleName(content string, keyword string) (string, error) {
	pattern := fmt.Sprintf(`%s\s+(\w+)`, regexp.QuoteMeta(keyword))
	re := regexp.MustCompile(pattern)
	matches := re.FindStringSubmatch(content)
	if len(matches) < 2 {
		return "", fmt.Errorf("library/contract name not found")
	}
	return matches[1], nil
}

// create a TypeScript deployment module for a solidity file
func createDeployModule(path string, config Config, fileName string, suffix string) error {
	fmt.Println("File detected:", path)

	destFilePath, err := fetchDestinationPath(path, config)
	if err != nil {
		return fmt.Errorf("error forming destination path: %w", err)
	}

	tsContent := generateTypeScriptContent(fileName, suffix)

	if err := os.WriteFile(destFilePath, []byte(tsContent), 0644); err != nil {
		return fmt.Errorf("error writing to .ts file: %w", err)
	}

	fmt.Println("Created .ts file:", destFilePath)
	return nil
}

// get the correct destination path for the new TypeScript file
func fetchDestinationPath(path string, config Config) (string, error) {
	relPath, err := filepath.Rel(config.SourceDir, path)
	if err != nil {
		return "", fmt.Errorf("error getting relative path: %w", err)
	}

	destFilePath := filepath.Join(config.DestinationDir, strings.TrimSuffix(relPath, ".sol")+".ts")

	if err := os.MkdirAll(filepath.Dir(destFilePath), os.ModePerm); err != nil {
		return "", fmt.Errorf("error creating destination directory: %w", err)
	}

	return destFilePath, nil
}

// create the content for the TypeScript deployment module
func generateTypeScriptContent(fileName, fileType string) string {

	var suffix string

    if strings.ToLower(fileType) == "contract" {
        suffix = "Contract"
    } else {
        suffix = "Lib"
    }

    moduleTemplate := `
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const %[1]sModule = buildModule("%[1]sModule", (m) => {
    const %[1]s%[2]s = m.%[3]s("%[1]s");

    return { %[1]s%[2]s };
});

export default %[1]sModule;`
    return fmt.Sprintf(moduleTemplate, fileName, suffix, fileType)
}
