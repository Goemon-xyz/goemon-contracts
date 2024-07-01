
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleSwellStakingERC20SYModule = buildModule("PendleSwellStakingERC20SYModule", (m) => {
    const PendleSwellStakingERC20SYContract = m.contract("PendleSwellStakingERC20SY");

    return { PendleSwellStakingERC20SYContract };
});

export default PendleSwellStakingERC20SYModule;