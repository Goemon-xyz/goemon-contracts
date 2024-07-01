
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleChainlinkRelayerModule = buildModule("PendleChainlinkRelayerModule", (m) => {
    const PendleChainlinkRelayerContract = m.contract("PendleChainlinkRelayer");

    return { PendleChainlinkRelayerContract };
});

export default PendleChainlinkRelayerModule;