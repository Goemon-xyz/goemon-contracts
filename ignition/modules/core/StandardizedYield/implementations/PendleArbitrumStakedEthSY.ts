
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleArbitrumStakedEthSYModule = buildModule("PendleArbitrumStakedEthSYModule", (m) => {
    const PendleArbitrumStakedEthSYContract = m.contract("PendleArbitrumStakedEthSY");

    return { PendleArbitrumStakedEthSYContract };
});

export default PendleArbitrumStakedEthSYModule;