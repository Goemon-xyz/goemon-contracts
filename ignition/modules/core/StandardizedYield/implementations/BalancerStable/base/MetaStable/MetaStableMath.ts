
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MetaStableMathModule = buildModule("MetaStableMathModule", (m) => {
    const MetaStableMathLib = m.library("MetaStableMath");

    return { MetaStableMathLib };
});

export default MetaStableMathModule;