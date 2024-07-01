
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LimitMathCoreModule = buildModule("LimitMathCoreModule", (m) => {
    const LimitMathCoreLib = m.library("LimitMathCore");

    return { LimitMathCoreLib };
});

export default LimitMathCoreModule;