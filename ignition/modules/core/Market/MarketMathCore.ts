
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MarketMathCoreModule = buildModule("MarketMathCoreModule", (m) => {
    const MarketMathCoreLib = m.library("MarketMathCore");

    return { MarketMathCoreLib };
});

export default MarketMathCoreModule;