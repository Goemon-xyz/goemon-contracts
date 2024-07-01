
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ActionSwapPTV3Module = buildModule("ActionSwapPTV3Module", (m) => {
    const ActionSwapPTV3Contract = m.contract("ActionSwapPTV3");

    return { ActionSwapPTV3Contract };
});

export default ActionSwapPTV3Module;