
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LinearPreviewModule = buildModule("LinearPreviewModule", (m) => {
    const LinearPreviewContract = m.contract("LinearPreview");

    return { LinearPreviewContract };
});

export default LinearPreviewModule;