
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleLpOracleLibModule = buildModule("PendleLpOracleLibModule", (m) => {
    const PendleLpOracleLibLib = m.library("PendleLpOracleLib");

    return { PendleLpOracleLibLib };
});

export default PendleLpOracleLibModule;