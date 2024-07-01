
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleGlpSYModule = buildModule("PendleGlpSYModule", (m) => {
    const PendleGlpSYContract = m.contract("PendleGlpSY");

    return { PendleGlpSYContract };
});

export default PendleGlpSYModule;