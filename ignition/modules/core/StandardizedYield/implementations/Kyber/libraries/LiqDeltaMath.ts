
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LiqDeltaMathModule = buildModule("LiqDeltaMathModule", (m) => {
    const LiqDeltaMathLib = m.library("LiqDeltaMath");

    return { LiqDeltaMathLib };
});

export default LiqDeltaMathModule;