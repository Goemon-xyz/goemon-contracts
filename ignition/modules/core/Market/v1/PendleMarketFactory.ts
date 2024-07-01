
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleMarketFactoryModule = buildModule("PendleMarketFactoryModule", (m) => {
    const PendleMarketFactoryContract = m.contract("PendleMarketFactory");

    return { PendleMarketFactoryContract };
});

export default PendleMarketFactoryModule;