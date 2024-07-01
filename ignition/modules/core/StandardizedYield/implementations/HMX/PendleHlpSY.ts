
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleHlpSYModule = buildModule("PendleHlpSYModule", (m) => {
    const PendleHlpSYContract = m.contract("PendleHlpSY");

    return { PendleHlpSYContract };
});

export default PendleHlpSYModule;