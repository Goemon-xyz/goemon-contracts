
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleERC20Module = buildModule("PendleERC20Module", (m) => {
    const PendleERC20Contract = m.contract("PendleERC20");

    return { PendleERC20Contract };
});

export default PendleERC20Module;