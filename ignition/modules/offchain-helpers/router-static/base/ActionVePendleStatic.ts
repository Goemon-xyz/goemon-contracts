
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ActionVePendleStaticModule = buildModule("ActionVePendleStaticModule", (m) => {
    const ActionVePendleStaticContract = m.contract("ActionVePendleStatic");

    return { ActionVePendleStaticContract };
});

export default ActionVePendleStaticModule;