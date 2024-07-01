
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ActionMarketAuxStaticModule = buildModule("ActionMarketAuxStaticModule", (m) => {
    const ActionMarketAuxStaticContract = m.contract("ActionMarketAuxStatic");

    return { ActionMarketAuxStaticContract };
});

export default ActionMarketAuxStaticModule;