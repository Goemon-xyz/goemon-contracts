
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleMarketFactoryV3Module = buildModule("PendleMarketFactoryV3Module", (m) => {
    const PendleMarketFactoryV3Contract = m.contract("PendleMarketFactoryV3");

    return { PendleMarketFactoryV3Contract };
});

export default PendleMarketFactoryV3Module;