
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleEUSDSYModule = buildModule("PendleEUSDSYModule", (m) => {
    const PendleEUSDSYContract = m.contract("PendleEUSDSY");

    return { PendleEUSDSYContract };
});

export default PendleEUSDSYModule;