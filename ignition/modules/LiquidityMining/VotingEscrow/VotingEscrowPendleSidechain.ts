
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const VotingEscrowPendleSidechainModule = buildModule("VotingEscrowPendleSidechainModule", (m) => {
    const VotingEscrowPendleSidechainContract = m.contract("VotingEscrowPendleSidechain");

    return { VotingEscrowPendleSidechainContract };
});

export default VotingEscrowPendleSidechainModule;