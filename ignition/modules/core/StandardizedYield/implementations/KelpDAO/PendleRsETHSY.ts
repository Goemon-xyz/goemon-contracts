
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleRsETHSYModule = buildModule("PendleRsETHSYModule", (m) => {
    const PendleRsETHSYContract = m.contract("PendleRsETHSY");

    return { PendleRsETHSYContract };
});

export default PendleRsETHSYModule;