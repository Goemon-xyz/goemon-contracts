
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CurveFraxUsdcPoolHelperModule = buildModule("CurveFraxUsdcPoolHelperModule", (m) => {
    const CurveFraxUsdcPoolHelperLib = m.library("CurveFraxUsdcPoolHelper");

    return { CurveFraxUsdcPoolHelperLib };
});

export default CurveFraxUsdcPoolHelperModule;