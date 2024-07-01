
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleBridgedLSDSYModule = buildModule("PendleBridgedLSDSYModule", (m) => {
    const PendleBridgedLSDSYContract = m.contract("PendleBridgedLSDSY");

    return { PendleBridgedLSDSYContract };
});

export default PendleBridgedLSDSYModule;