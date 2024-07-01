
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SwapMathModule = buildModule("SwapMathModule", (m) => {
    const SwapMathLib = m.library("SwapMath");

    return { SwapMathLib };
});

export default SwapMathModule;