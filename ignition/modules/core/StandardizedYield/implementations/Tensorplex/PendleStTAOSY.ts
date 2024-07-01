
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const onModule = buildModule("onModule", (m) => {
    const onContract = m.contract("on");

    return { onContract };
});

export default onModule;