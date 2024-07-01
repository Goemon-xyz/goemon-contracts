
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CamelotRewardHelperModule = buildModule("CamelotRewardHelperModule", (m) => {
    const CamelotRewardHelperContract = m.contract("CamelotRewardHelper");

    return { CamelotRewardHelperContract };
});

export default CamelotRewardHelperModule;