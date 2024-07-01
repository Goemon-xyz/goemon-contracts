
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleUSDEL2SYModule = buildModule("PendleUSDEL2SYModule", (m) => {
    const PendleUSDEL2SYContract = m.contract("PendleUSDEL2SY");

    return { PendleUSDEL2SYContract };
});

export default PendleUSDEL2SYModule;