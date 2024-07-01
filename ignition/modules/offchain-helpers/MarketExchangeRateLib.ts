
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MarketExchangeRateLibModule = buildModule("MarketExchangeRateLibModule", (m) => {
    const MarketExchangeRateLibLib = m.library("MarketExchangeRateLib");

    return { MarketExchangeRateLibLib };
});

export default MarketExchangeRateLibModule;