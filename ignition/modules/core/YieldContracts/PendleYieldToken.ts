
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleYieldTokenModule = buildModule("PendleYieldTokenModule", (m) => {
    const PendleYieldTokenContract = m.contract("PendleYieldToken");

    return { PendleYieldTokenContract };
});

export default PendleYieldTokenModule;