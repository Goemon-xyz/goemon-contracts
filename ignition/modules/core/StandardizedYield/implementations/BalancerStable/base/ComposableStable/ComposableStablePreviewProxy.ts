
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ComposableStablePreviewProxyModule = buildModule("ComposableStablePreviewProxyModule", (m) => {
    const ComposableStablePreviewProxyContract = m.contract("ComposableStablePreviewProxy");

    return { ComposableStablePreviewProxyContract };
});

export default ComposableStablePreviewProxyModule;