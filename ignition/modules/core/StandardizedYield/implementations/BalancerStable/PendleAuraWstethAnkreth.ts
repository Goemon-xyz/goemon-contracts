
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleAuraWstethAnkrethModule = buildModule("PendleAuraWstethAnkrethModule", (m) => {
    const PendleAuraWstethAnkrethContract = m.contract("PendleAuraWstethAnkreth");

    return { PendleAuraWstethAnkrethContract };
});

export default PendleAuraWstethAnkrethModule;