
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleUSDESYModule = buildModule("PendleUSDESYModule", (m) => {
    const PendleUSDESYContract = m.contract("PendleUSDESY");

    return { PendleUSDESYContract };
});

export default PendleUSDESYModule;