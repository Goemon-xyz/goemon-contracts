
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleApxETHSYModule = buildModule("PendleApxETHSYModule", (m) => {
    const PendleApxETHSYContract = m.contract("PendleApxETHSY");

    return { PendleApxETHSYContract };
});

export default PendleApxETHSYModule;