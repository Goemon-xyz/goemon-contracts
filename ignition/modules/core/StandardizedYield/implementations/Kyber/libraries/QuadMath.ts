
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const QuadMathModule = buildModule("QuadMathModule", (m) => {
    const QuadMathLib = m.library("QuadMath");

    return { QuadMathLib };
});

export default QuadMathModule;