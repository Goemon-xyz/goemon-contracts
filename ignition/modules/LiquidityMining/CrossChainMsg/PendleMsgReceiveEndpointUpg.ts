
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleMsgReceiveEndpointUpgModule = buildModule("PendleMsgReceiveEndpointUpgModule", (m) => {
    const PendleMsgReceiveEndpointUpgContract = m.contract("PendleMsgReceiveEndpointUpg");

    return { PendleMsgReceiveEndpointUpgContract };
});

export default PendleMsgReceiveEndpointUpgModule;