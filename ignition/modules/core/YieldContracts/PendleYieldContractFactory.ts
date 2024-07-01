
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const isModule = buildModule("isModule", (m) => {
    const isContract = m.contract("is");

    return { isContract };
});

export default isModule;