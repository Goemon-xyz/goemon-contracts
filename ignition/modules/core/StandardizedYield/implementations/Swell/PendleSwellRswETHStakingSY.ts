
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleSwellRswETHStakingSYModule = buildModule("PendleSwellRswETHStakingSYModule", (m) => {
    const PendleSwellRswETHStakingSYContract = m.contract("PendleSwellRswETHStakingSY");

    return { PendleSwellRswETHStakingSYContract };
});

export default PendleSwellRswETHStakingSYModule;