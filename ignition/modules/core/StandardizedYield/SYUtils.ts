
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SYUtilsModule = buildModule("SYUtilsModule", (m) => {
    const SYUtilsLib = m.library("SYUtils");

    return { SYUtilsLib };
});

export default SYUtilsModule;