
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const FixedPointModule = buildModule("FixedPointModule", (m) => {
    const FixedPointLib = m.library("FixedPoint");

    return { FixedPointLib };
});

export default FixedPointModule;