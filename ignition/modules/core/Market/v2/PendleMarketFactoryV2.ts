
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleMarketFactoryV2Module = buildModule("PendleMarketFactoryV2Module", (m) => {
    const PendleMarketFactoryV2Contract = m.contract("PendleMarketFactoryV2");

    return { PendleMarketFactoryV2Contract };
});

export default PendleMarketFactoryV2Module;