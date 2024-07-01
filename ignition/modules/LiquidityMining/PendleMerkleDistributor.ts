
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleMerkleDistributorModule = buildModule("PendleMerkleDistributorModule", (m) => {
    const PendleMerkleDistributorContract = m.contract("PendleMerkleDistributor");

    return { PendleMerkleDistributorContract };
});

export default PendleMerkleDistributorModule;