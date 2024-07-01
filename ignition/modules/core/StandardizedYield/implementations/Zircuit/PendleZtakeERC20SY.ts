
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleZtakeERC20SYModule = buildModule("PendleZtakeERC20SYModule", (m) => {
    const PendleZtakeERC20SYContract = m.contract("PendleZtakeERC20SY");

    return { PendleZtakeERC20SYContract };
});

export default PendleZtakeERC20SYModule;