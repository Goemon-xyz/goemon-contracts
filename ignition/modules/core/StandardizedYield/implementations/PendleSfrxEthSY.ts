
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleSfrxEthSYModule = buildModule("PendleSfrxEthSYModule", (m) => {
    const PendleSfrxEthSYContract = m.contract("PendleSfrxEthSY");

    return { PendleSfrxEthSYContract };
});

export default PendleSfrxEthSYModule;