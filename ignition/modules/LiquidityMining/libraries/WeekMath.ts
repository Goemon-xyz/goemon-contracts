
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const WeekMathModule = buildModule("WeekMathModule", (m) => {
    const WeekMathLib = m.library("WeekMath");

    return { WeekMathLib };
});

export default WeekMathModule;