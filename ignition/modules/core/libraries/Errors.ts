
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ErrorsModule = buildModule("ErrorsModule", (m) => {
    const ErrorsLib = m.library("Errors");

    return { ErrorsLib };
});

export default ErrorsModule;