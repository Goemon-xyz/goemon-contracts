
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleOracleForSyProxyModule = buildModule("PendleOracleForSyProxyModule", (m) => {
    const PendleOracleForSyProxyContract = m.contract("PendleOracleForSyProxy");

    return { PendleOracleForSyProxyContract };
});

export default PendleOracleForSyProxyModule;