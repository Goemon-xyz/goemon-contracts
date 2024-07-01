
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleFluxLendingSYModule = buildModule("PendleFluxLendingSYModule", (m) => {
    const PendleFluxLendingSYContract = m.contract("PendleFluxLendingSY");

    return { PendleFluxLendingSYContract };
});

export default PendleFluxLendingSYModule;