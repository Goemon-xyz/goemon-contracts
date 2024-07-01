
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ComposableStablePreviewV5Module = buildModule("ComposableStablePreviewV5Module", (m) => {
    const ComposableStablePreviewV5Contract = m.contract("ComposableStablePreviewV5");

    return { ComposableStablePreviewV5Contract };
});

export default ComposableStablePreviewV5Module;