
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleFeeDistributorModule = buildModule("PendleFeeDistributorModule", (m) => {
    const PendleFeeDistributorContract = m.contract("PendleFeeDistributor");

    return { PendleFeeDistributorContract };
});

export default PendleFeeDistributorModule;