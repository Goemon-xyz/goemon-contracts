
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LiquidityMathModule = buildModule("LiquidityMathModule", (m) => {
    const LiquidityMathLib = m.library("LiquidityMath");

    return { LiquidityMathLib };
});

export default LiquidityMathModule;