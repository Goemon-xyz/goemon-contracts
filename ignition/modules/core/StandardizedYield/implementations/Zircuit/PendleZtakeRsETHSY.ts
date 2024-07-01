
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleZtakeRsETHSYModule = buildModule("PendleZtakeRsETHSYModule", (m) => {
    const PendleZtakeRsETHSYContract = m.contract("PendleZtakeRsETHSY");

    return { PendleZtakeRsETHSYContract };
});

export default PendleZtakeRsETHSYModule;