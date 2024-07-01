
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ActionCallbackV3Module = buildModule("ActionCallbackV3Module", (m) => {
    const ActionCallbackV3Contract = m.contract("ActionCallbackV3");

    return { ActionCallbackV3Contract };
});

export default ActionCallbackV3Module;