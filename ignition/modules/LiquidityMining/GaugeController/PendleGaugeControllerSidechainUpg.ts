
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleGaugeControllerSidechainUpgModule = buildModule("PendleGaugeControllerSidechainUpgModule", (m) => {
    const PendleGaugeControllerSidechainUpgContract = m.contract("PendleGaugeControllerSidechainUpg");

    return { PendleGaugeControllerSidechainUpgContract };
});

export default PendleGaugeControllerSidechainUpgModule;