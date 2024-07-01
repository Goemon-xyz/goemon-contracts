
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleAuraWethRocketEthSYV2Module = buildModule("PendleAuraWethRocketEthSYV2Module", (m) => {
    const PendleAuraWethRocketEthSYV2Contract = m.contract("PendleAuraWethRocketEthSYV2");

    return { PendleAuraWethRocketEthSYV2Contract };
});

export default PendleAuraWethRocketEthSYV2Module;