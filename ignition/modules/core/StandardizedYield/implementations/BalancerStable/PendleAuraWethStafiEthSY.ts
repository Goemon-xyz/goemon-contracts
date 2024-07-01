
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleAuraWethStafiEthSYModule = buildModule("PendleAuraWethStafiEthSYModule", (m) => {
    const PendleAuraWethStafiEthSYContract = m.contract("PendleAuraWethStafiEthSY");

    return { PendleAuraWethStafiEthSYContract };
});

export default PendleAuraWethStafiEthSYModule;