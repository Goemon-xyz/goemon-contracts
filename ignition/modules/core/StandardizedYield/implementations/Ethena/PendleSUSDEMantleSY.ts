
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleSUSDEMantleSYModule = buildModule("PendleSUSDEMantleSYModule", (m) => {
    const PendleSUSDEMantleSYContract = m.contract("PendleSUSDEMantleSY");

    return { PendleSUSDEMantleSYContract };
});

export default PendleSUSDEMantleSYModule;