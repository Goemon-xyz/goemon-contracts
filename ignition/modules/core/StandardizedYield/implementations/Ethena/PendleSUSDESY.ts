
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleSUSDESYModule = buildModule("PendleSUSDESYModule", (m) => {
    const PendleSUSDESYContract = m.contract("PendleSUSDESY");

    return { PendleSUSDESYContract };
});

export default PendleSUSDESYModule;