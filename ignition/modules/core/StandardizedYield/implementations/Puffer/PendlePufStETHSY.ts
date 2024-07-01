
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendlePufStETHSYModule = buildModule("PendlePufStETHSYModule", (m) => {
    const PendlePufStETHSYContract = m.contract("PendlePufStETHSY");

    return { PendlePufStETHSYContract };
});

export default PendlePufStETHSYModule;