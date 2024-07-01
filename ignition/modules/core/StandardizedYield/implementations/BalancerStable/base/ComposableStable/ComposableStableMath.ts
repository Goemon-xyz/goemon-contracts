
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ComposableStableMathModule = buildModule("ComposableStableMathModule", (m) => {
    const ComposableStableMathLib = m.library("ComposableStableMath");

    return { ComposableStableMathLib };
});

export default ComposableStableMathModule;