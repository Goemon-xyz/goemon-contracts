
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleExternalRewardDistributorModule = buildModule("PendleExternalRewardDistributorModule", (m) => {
    const PendleExternalRewardDistributorContract = m.contract("PendleExternalRewardDistributor");

    return { PendleExternalRewardDistributorContract };
});

export default PendleExternalRewardDistributorModule;