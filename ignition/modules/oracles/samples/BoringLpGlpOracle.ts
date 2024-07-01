
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BoringLpGlpOracleModule = buildModule("BoringLpGlpOracleModule", (m) => {
    const BoringLpGlpOracleContract = m.contract("BoringLpGlpOracle");

    return { BoringLpGlpOracleContract };
});

export default BoringLpGlpOracleModule;