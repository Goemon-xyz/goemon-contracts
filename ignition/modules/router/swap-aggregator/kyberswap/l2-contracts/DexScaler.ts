
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DexScalerModule = buildModule("DexScalerModule", (m) => {
    const DexScalerLib = m.library("DexScaler");

    return { DexScalerLib };
});

export default DexScalerModule;