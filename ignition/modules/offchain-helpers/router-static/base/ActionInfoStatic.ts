
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ActionInfoStaticModule = buildModule("ActionInfoStaticModule", (m) => {
    const ActionInfoStaticContract = m.contract("ActionInfoStatic");

    return { ActionInfoStaticContract };
});

export default ActionInfoStaticModule;