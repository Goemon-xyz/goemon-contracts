
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ReinvestmentMathModule = buildModule("ReinvestmentMathModule", (m) => {
    const ReinvestmentMathLib = m.library("ReinvestmentMath");

    return { ReinvestmentMathLib };
});

export default ReinvestmentMathModule;