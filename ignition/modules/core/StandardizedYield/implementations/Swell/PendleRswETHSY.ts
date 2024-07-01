
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleRswETHSYModule = buildModule("PendleRswETHSYModule", (m) => {
    const PendleRswETHSYContract = m.contract("PendleRswETHSY");

    return { PendleRswETHSYContract };
});

export default PendleRswETHSYModule;