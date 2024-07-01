
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleWbEthSYModule = buildModule("PendleWbEthSYModule", (m) => {
    const PendleWbEthSYContract = m.contract("PendleWbEthSY");

    return { PendleWbEthSYContract };
});

export default PendleWbEthSYModule;