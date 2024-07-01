
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LayerZeroHelperModule = buildModule("LayerZeroHelperModule", (m) => {
    const LayerZeroHelperLib = m.library("LayerZeroHelper");

    return { LayerZeroHelperLib };
});

export default LayerZeroHelperModule;