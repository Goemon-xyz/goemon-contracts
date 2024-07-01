
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleRouterStaticModule = buildModule("PendleRouterStaticModule", (m) => {
    const PendleRouterStaticContract = m.contract("PendleRouterStatic");

    return { PendleRouterStaticContract };
});

export default PendleRouterStaticModule;