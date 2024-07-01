
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LinearMathModule = buildModule("LinearMathModule", (m) => {
    const LinearMathLib = m.library("LinearMath");

    return { LinearMathLib };
});

export default LinearMathModule;