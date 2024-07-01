
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleGDaiSYModule = buildModule("PendleGDaiSYModule", (m) => {
    const PendleGDaiSYContract = m.contract("PendleGDaiSY");

    return { PendleGDaiSYContract };
});

export default PendleGDaiSYModule;