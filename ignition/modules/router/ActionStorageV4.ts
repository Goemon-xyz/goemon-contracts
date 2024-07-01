
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ActionStorageV4Module = buildModule("ActionStorageV4Module", (m) => {
    const ActionStorageV4Contract = m.contract("ActionStorageV4");

    return { ActionStorageV4Contract };
});

export default ActionStorageV4Module;