
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const FluxTokenLibModule = buildModule("FluxTokenLibModule", (m) => {
    const FluxTokenLibLib = m.library("FluxTokenLib");

    return { FluxTokenLibLib };
});

export default FluxTokenLibModule;