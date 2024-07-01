
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MathConstantsModule = buildModule("MathConstantsModule", (m) => {
    const MathConstantsLib = m.library("MathConstants");

    return { MathConstantsLib };
});

export default MathConstantsModule;