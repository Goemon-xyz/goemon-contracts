
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BroadcasterModule = buildModule("BroadcasterModule", (m) => {
    const BroadcasterContract = m.contract("Broadcaster");

    return { BroadcasterContract };
});

export default BroadcasterModule;