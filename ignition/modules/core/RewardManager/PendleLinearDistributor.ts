
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleLinearDistributorModule = buildModule("PendleLinearDistributorModule", (m) => {
    const PendleLinearDistributorContract = m.contract("PendleLinearDistributor");

    return { PendleLinearDistributorContract };
});

export default PendleLinearDistributorModule;