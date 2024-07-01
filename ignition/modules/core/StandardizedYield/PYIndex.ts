
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PYIndexLibModule = buildModule("PYIndexLibModule", (m) => {
    const PYIndexLibLib = m.library("PYIndexLib");

    return { PYIndexLibLib };
});

export default PYIndexLibModule;