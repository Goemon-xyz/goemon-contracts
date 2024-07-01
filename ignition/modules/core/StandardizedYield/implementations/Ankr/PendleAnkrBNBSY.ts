
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleAnkrBNBSYModule = buildModule("PendleAnkrBNBSYModule", (m) => {
    const PendleAnkrBNBSYContract = m.contract("PendleAnkrBNBSY");

    return { PendleAnkrBNBSYContract };
});

export default PendleAnkrBNBSYModule;