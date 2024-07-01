
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleAaveV3WithRewardsSYModule = buildModule("PendleAaveV3WithRewardsSYModule", (m) => {
    const PendleAaveV3WithRewardsSYContract = m.contract("PendleAaveV3WithRewardsSY");

    return { PendleAaveV3WithRewardsSYContract };
});

export default PendleAaveV3WithRewardsSYModule;