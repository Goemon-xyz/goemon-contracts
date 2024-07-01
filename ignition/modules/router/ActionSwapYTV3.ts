
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ActionSwapYTV3Module = buildModule("ActionSwapYTV3Module", (m) => {
    const ActionSwapYTV3Contract = m.contract("ActionSwapYTV3");

    return { ActionSwapYTV3Contract };
});

export default ActionSwapYTV3Module;