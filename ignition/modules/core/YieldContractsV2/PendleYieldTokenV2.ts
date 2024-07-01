
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleYieldTokenV2Module = buildModule("PendleYieldTokenV2Module", (m) => {
    const PendleYieldTokenV2Contract = m.contract("PendleYieldTokenV2");

    return { PendleYieldTokenV2Contract };
});

export default PendleYieldTokenV2Module;