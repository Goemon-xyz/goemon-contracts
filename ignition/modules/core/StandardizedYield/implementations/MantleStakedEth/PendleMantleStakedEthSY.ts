
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleMantleStakedEthSYModule = buildModule("PendleMantleStakedEthSYModule", (m) => {
    const PendleMantleStakedEthSYContract = m.contract("PendleMantleStakedEthSY");

    return { PendleMantleStakedEthSYContract };
});

export default PendleMantleStakedEthSYModule;