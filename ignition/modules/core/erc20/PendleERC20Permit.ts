
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleERC20PermitModule = buildModule("PendleERC20PermitModule", (m) => {
    const PendleERC20PermitContract = m.contract("PendleERC20Permit");

    return { PendleERC20PermitContract };
});

export default PendleERC20PermitModule;