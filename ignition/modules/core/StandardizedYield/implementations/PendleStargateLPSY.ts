
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleStargateLPSYModule = buildModule("PendleStargateLPSYModule", (m) => {
    const PendleStargateLPSYContract = m.contract("PendleStargateLPSY");

    return { PendleStargateLPSYContract };
});

export default PendleStargateLPSYModule;