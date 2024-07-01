
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleL2LRTSYModule = buildModule("PendleL2LRTSYModule", (m) => {
    const PendleL2LRTSYContract = m.contract("PendleL2LRTSY");

    return { PendleL2LRTSYContract };
});

export default PendleL2LRTSYModule;