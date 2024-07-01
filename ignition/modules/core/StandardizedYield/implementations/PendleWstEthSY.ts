
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleWstEthSYModule = buildModule("PendleWstEthSYModule", (m) => {
    const PendleWstEthSYContract = m.contract("PendleWstEthSY");

    return { PendleWstEthSYContract };
});

export default PendleWstEthSYModule;