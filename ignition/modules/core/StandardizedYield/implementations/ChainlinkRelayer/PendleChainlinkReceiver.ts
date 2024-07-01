
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleChainlinkReceiverModule = buildModule("PendleChainlinkReceiverModule", (m) => {
    const PendleChainlinkReceiverContract = m.contract("PendleChainlinkReceiver");

    return { PendleChainlinkReceiverContract };
});

export default PendleChainlinkReceiverModule;