
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleETHXSYModule = buildModule("PendleETHXSYModule", (m) => {
    const PendleETHXSYContract = m.contract("PendleETHXSY");

    return { PendleETHXSYContract };
});

export default PendleETHXSYModule;