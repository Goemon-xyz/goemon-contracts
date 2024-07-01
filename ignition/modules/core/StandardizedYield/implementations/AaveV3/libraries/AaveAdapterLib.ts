
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const AaveAdapterLibModule = buildModule("AaveAdapterLibModule", (m) => {
    const AaveAdapterLibLib = m.library("AaveAdapterLib");

    return { AaveAdapterLibLib };
});

export default AaveAdapterLibModule;