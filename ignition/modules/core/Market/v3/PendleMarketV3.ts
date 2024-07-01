
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleMarketV3Module = buildModule("PendleMarketV3Module", (m) => {
    const PendleMarketV3Contract = m.contract("PendleMarketV3");

    return { PendleMarketV3Contract };
});

export default PendleMarketV3Module;