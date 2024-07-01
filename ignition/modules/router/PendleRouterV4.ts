
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleRouterV4Module = buildModule("PendleRouterV4Module", (m) => {
    const PendleRouterV4Contract = m.contract("PendleRouterV4");

    return { PendleRouterV4Contract };
});

export default PendleRouterV4Module;