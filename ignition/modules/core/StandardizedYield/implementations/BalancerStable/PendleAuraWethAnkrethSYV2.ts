
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleAuraWethAnkrethSYV2Module = buildModule("PendleAuraWethAnkrethSYV2Module", (m) => {
    const PendleAuraWethAnkrethSYV2Contract = m.contract("PendleAuraWethAnkrethSYV2");

    return { PendleAuraWethAnkrethSYV2Contract };
});

export default PendleAuraWethAnkrethSYV2Module;