
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleVotingControllerUpgModule = buildModule("PendleVotingControllerUpgModule", (m) => {
    const PendleVotingControllerUpgContract = m.contract("PendleVotingControllerUpg");

    return { PendleVotingControllerUpgContract };
});

export default PendleVotingControllerUpgModule;