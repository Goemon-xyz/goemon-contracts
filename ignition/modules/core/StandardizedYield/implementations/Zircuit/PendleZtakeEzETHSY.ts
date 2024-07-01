
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleZtakeEzETHSYModule = buildModule("PendleZtakeEzETHSYModule", (m) => {
    const PendleZtakeEzETHSYContract = m.contract("PendleZtakeEzETHSY");

    return { PendleZtakeEzETHSYContract };
});

export default PendleZtakeEzETHSYModule;