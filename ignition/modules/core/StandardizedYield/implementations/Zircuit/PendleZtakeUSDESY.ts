
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleZtakeUSDESYModule = buildModule("PendleZtakeUSDESYModule", (m) => {
    const PendleZtakeUSDESYContract = m.contract("PendleZtakeUSDESY");

    return { PendleZtakeUSDESYContract };
});

export default PendleZtakeUSDESYModule;