
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendlePufWETHSYModule = buildModule("PendlePufWETHSYModule", (m) => {
    const PendlePufWETHSYContract = m.contract("PendlePufWETHSY");

    return { PendlePufWETHSYContract };
});

export default PendlePufWETHSYModule;