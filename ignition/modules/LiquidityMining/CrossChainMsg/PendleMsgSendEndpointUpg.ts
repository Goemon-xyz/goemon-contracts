
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleMsgSendEndpointUpgModule = buildModule("PendleMsgSendEndpointUpgModule", (m) => {
    const PendleMsgSendEndpointUpgContract = m.contract("PendleMsgSendEndpointUpg");

    return { PendleMsgSendEndpointUpgContract };
});

export default PendleMsgSendEndpointUpgModule;