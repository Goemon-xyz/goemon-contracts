
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SDKErrorsDirectoryModule = buildModule("SDKErrorsDirectoryModule", (m) => {
    const SDKErrorsDirectoryLib = m.library("SDKErrorsDirectory");

    return { SDKErrorsDirectoryLib };
});

export default SDKErrorsDirectoryModule;