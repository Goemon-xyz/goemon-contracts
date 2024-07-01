
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TickMathModule = buildModule("TickMathModule", (m) => {
    const TickMathLib = m.library("TickMath");

    return { TickMathLib };
});

export default TickMathModule;