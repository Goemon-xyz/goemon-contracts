
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ActionMarketCoreStaticModule = buildModule("ActionMarketCoreStaticModule", (m) => {
    const ActionMarketCoreStaticContract = m.contract("ActionMarketCoreStatic");

    return { ActionMarketCoreStaticContract };
});

export default ActionMarketCoreStaticModule;