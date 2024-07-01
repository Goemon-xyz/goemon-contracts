
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleAaveV3SYModule = buildModule("PendleAaveV3SYModule", (m) => {
    const PendleAaveV3SYContract = m.contract("PendleAaveV3SY");

    return { PendleAaveV3SYContract };
});

export default PendleAaveV3SYModule;