
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const FullMathModule = buildModule("FullMathModule", (m) => {
    const FullMathLib = m.library("FullMath");

    return { FullMathLib };
});

export default FullMathModule;