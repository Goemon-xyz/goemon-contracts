
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ComposableStablePreviewV4Module = buildModule("ComposableStablePreviewV4Module", (m) => {
    const ComposableStablePreviewV4Contract = m.contract("ComposableStablePreviewV4");

    return { ComposableStablePreviewV4Contract };
});

export default ComposableStablePreviewV4Module;