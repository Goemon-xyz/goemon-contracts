
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ExpiryUtilsModule = buildModule("ExpiryUtilsModule", (m) => {
    const ExpiryUtilsLib = m.library("ExpiryUtils");

    return { ExpiryUtilsLib };
});

export default ExpiryUtilsModule;