
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendlePoolDeployHelperModule = buildModule("PendlePoolDeployHelperModule", (m) => {
    const PendlePoolDeployHelperContract = m.contract("PendlePoolDeployHelper");

    return { PendlePoolDeployHelperContract };
});

export default PendlePoolDeployHelperModule;