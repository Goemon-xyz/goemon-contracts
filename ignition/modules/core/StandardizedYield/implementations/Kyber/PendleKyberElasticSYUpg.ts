
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleKyberElasticSYUpgModule = buildModule("PendleKyberElasticSYUpgModule", (m) => {
    const PendleKyberElasticSYUpgContract = m.contract("PendleKyberElasticSYUpg");

    return { PendleKyberElasticSYUpgContract };
});

export default PendleKyberElasticSYUpgModule;