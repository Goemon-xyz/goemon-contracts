
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleMlpSYModule = buildModule("PendleMlpSYModule", (m) => {
    const PendleMlpSYContract = m.contract("PendleMlpSY");

    return { PendleMlpSYContract };
});

export default PendleMlpSYModule;