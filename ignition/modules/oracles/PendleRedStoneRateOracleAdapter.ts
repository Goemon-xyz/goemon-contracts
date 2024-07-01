
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleRedStoneRateOracleAdapterModule = buildModule("PendleRedStoneRateOracleAdapterModule", (m) => {
    const PendleRedStoneRateOracleAdapterContract = m.contract("PendleRedStoneRateOracleAdapter");

    return { PendleRedStoneRateOracleAdapterContract };
});

export default PendleRedStoneRateOracleAdapterModule;