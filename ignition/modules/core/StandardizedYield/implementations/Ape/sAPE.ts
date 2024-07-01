
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const sAPEModule = buildModule("sAPEModule", (m) => {
    const sAPEContract = m.contract("sAPE");

    return { sAPEContract };
});

export default sAPEModule;