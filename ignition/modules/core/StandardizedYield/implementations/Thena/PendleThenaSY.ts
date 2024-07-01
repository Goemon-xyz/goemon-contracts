
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleThenaSYModule = buildModule("PendleThenaSYModule", (m) => {
    const PendleThenaSYContract = m.contract("PendleThenaSY");

    return { PendleThenaSYContract };
});

export default PendleThenaSYModule;