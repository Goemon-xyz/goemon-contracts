
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleCurveFraxUsdcSYModule = buildModule("PendleCurveFraxUsdcSYModule", (m) => {
    const PendleCurveFraxUsdcSYContract = m.contract("PendleCurveFraxUsdcSY");

    return { PendleCurveFraxUsdcSYContract };
});

export default PendleCurveFraxUsdcSYModule;