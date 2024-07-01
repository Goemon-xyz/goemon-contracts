
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleUniETHSYModule = buildModule("PendleUniETHSYModule", (m) => {
    const PendleUniETHSYContract = m.contract("PendleUniETHSY");

    return { PendleUniETHSYContract };
});

export default PendleUniETHSYModule;