
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleExchangeRateOracleModule = buildModule("PendleExchangeRateOracleModule", (m) => {
    const PendleExchangeRateOracleContract = m.contract("PendleExchangeRateOracle");

    return { PendleExchangeRateOracleContract };
});

export default PendleExchangeRateOracleModule;