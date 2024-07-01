
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendlePYOracleLibModule = buildModule("PendlePYOracleLibModule", (m) => {
    const PendlePYOracleLibLib = m.library("PendlePYOracleLib");

    return { PendlePYOracleLibLib };
});

export default PendlePYOracleLibModule;