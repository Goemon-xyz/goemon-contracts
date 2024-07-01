
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleLimitRouterModule = buildModule("PendleLimitRouterModule", (m) => {
    const PendleLimitRouterContract = m.contract("PendleLimitRouter");

    return { PendleLimitRouterContract };
});

export default PendleLimitRouterModule;