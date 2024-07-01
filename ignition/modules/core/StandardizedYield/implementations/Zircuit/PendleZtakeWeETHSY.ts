
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleZtakeWeETHSYModule = buildModule("PendleZtakeWeETHSYModule", (m) => {
    const PendleZtakeWeETHSYContract = m.contract("PendleZtakeWeETHSY");

    return { PendleZtakeWeETHSYContract };
});

export default PendleZtakeWeETHSYModule;