
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LogExpMathModule = buildModule("LogExpMathModule", (m) => {
    const LogExpMathLib = m.library("LogExpMath");

    return { LogExpMathLib };
});

export default LogExpMathModule;