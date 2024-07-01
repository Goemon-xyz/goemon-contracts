
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const OracleLibModule = buildModule("OracleLibModule", (m) => {
    const OracleLibLib = m.library("OracleLib");

    return { OracleLibLib };
});

export default OracleLibModule;