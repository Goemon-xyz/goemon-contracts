
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const forModule = buildModule("forModule", (m) => {
    const forContract = m.contract("for");

    return { forContract };
});

export default forModule;