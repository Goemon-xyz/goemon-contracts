
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleAuraWethWstethSYV2Module = buildModule("PendleAuraWethWstethSYV2Module", (m) => {
    const PendleAuraWethWstethSYV2Contract = m.contract("PendleAuraWethWstethSYV2");

    return { PendleAuraWethWstethSYV2Contract };
});

export default PendleAuraWethWstethSYV2Module;