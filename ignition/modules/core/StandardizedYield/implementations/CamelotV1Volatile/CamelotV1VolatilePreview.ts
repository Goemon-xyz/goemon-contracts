
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CamelotV1VolatilePreviewModule = buildModule("CamelotV1VolatilePreviewModule", (m) => {
    const CamelotV1VolatilePreviewContract = m.contract("CamelotV1VolatilePreview");

    return { CamelotV1VolatilePreviewContract };
});

export default CamelotV1VolatilePreviewModule;