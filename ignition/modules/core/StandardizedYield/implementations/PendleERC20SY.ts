
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleERC20SYModule = buildModule("PendleERC20SYModule", (m) => {
    const PendleERC20SYContract = m.contract("PendleERC20SY");

    return { PendleERC20SYContract };
});

export default PendleERC20SYModule;