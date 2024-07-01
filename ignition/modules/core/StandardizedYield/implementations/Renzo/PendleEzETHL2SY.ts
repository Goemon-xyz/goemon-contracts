
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleEzETHL2SYModule = buildModule("PendleEzETHL2SYModule", (m) => {
    const PendleEzETHL2SYContract = m.contract("PendleEzETHL2SY");

    return { PendleEzETHL2SYContract };
});

export default PendleEzETHL2SYModule;