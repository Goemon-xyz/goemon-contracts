
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const WadRayMathModule = buildModule("WadRayMathModule", (m) => {
    const WadRayMathLib = m.library("WadRayMath");

    return { WadRayMathLib };
});

export default WadRayMathModule;