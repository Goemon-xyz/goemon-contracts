
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ScalingDataL2LibModule = buildModule("ScalingDataL2LibModule", (m) => {
    const ScalingDataL2LibLib = m.library("ScalingDataL2Lib");

    return { ScalingDataL2LibLib };
});

export default ScalingDataL2LibModule;