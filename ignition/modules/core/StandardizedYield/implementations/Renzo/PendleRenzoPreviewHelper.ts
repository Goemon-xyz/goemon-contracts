
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleRenzoPreviewHelperModule = buildModule("PendleRenzoPreviewHelperModule", (m) => {
    const PendleRenzoPreviewHelperContract = m.contract("PendleRenzoPreviewHelper");

    return { PendleRenzoPreviewHelperContract };
});

export default PendleRenzoPreviewHelperModule;