
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ActionAddRemoveLiqV3Module = buildModule("ActionAddRemoveLiqV3Module", (m) => {
    const ActionAddRemoveLiqV3Contract = m.contract("ActionAddRemoveLiqV3");

    return { ActionAddRemoveLiqV3Contract };
});

export default ActionAddRemoveLiqV3Module;