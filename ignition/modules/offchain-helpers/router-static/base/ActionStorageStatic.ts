
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ActionStorageStaticModule = buildModule("ActionStorageStaticModule", (m) => {
    const ActionStorageStaticContract = m.contract("ActionStorageStatic");

    return { ActionStorageStaticContract };
});

export default ActionStorageStaticModule;