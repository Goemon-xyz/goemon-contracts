
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleGaugeControllerMainchainUpgModule = buildModule("PendleGaugeControllerMainchainUpgModule", (m) => {
    const PendleGaugeControllerMainchainUpgContract = m.contract("PendleGaugeControllerMainchainUpg");

    return { PendleGaugeControllerMainchainUpgContract };
});

export default PendleGaugeControllerMainchainUpgModule;