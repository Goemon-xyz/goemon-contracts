
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MarketApproxPtInLibModule = buildModule("MarketApproxPtInLibModule", (m) => {
    const MarketApproxPtInLibLib = m.library("MarketApproxPtInLib");

    return { MarketApproxPtInLibLib };
});

export default MarketApproxPtInLibModule;