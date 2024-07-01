
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleFeeDistributorV2Module = buildModule("PendleFeeDistributorV2Module", (m) => {
    const PendleFeeDistributorV2Contract = m.contract("PendleFeeDistributorV2");

    return { PendleFeeDistributorV2Contract };
});

export default PendleFeeDistributorV2Module;