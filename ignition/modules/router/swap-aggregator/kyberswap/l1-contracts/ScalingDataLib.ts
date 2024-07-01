
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ScalingDataLibModule = buildModule("ScalingDataLibModule", (m) => {
    const ScalingDataLibLib = m.library("ScalingDataLib");

    return { ScalingDataLibLib };
});

export default ScalingDataLibModule;