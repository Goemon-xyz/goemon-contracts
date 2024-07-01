
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleMarketModule = buildModule("PendleMarketModule", (m) => {
    const PendleMarketContract = m.contract("PendleMarket");

    return { PendleMarketContract };
});

export default PendleMarketModule;