
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleEzETHSYModule = buildModule("PendleEzETHSYModule", (m) => {
    const PendleEzETHSYContract = m.contract("PendleEzETHSY");

    return { PendleEzETHSYContract };
});

export default PendleEzETHSYModule;