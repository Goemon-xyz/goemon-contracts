
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const VotingEscrowPendleMainchainModule = buildModule("VotingEscrowPendleMainchainModule", (m) => {
    const VotingEscrowPendleMainchainContract = m.contract("VotingEscrowPendleMainchain");

    return { VotingEscrowPendleMainchainContract };
});

export default VotingEscrowPendleMainchainModule;