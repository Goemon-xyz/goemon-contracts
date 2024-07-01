
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleMarketV2Module = buildModule("PendleMarketV2Module", (m) => {
    const PendleMarketV2Contract = m.contract("PendleMarketV2");

    return { PendleMarketV2Contract };
});

export default PendleMarketV2Module;