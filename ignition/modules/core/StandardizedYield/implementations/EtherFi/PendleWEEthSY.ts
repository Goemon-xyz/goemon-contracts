
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleWEEthSYModule = buildModule("PendleWEEthSYModule", (m) => {
    const PendleWEEthSYContract = m.contract("PendleWEEthSY");

    return { PendleWEEthSYContract };
});

export default PendleWEEthSYModule;