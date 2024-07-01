
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const NonceManagerModule = buildModule("NonceManagerModule", (m) => {
    const NonceManagerContract = m.contract("NonceManager");

    return { NonceManagerContract };
});

export default NonceManagerModule;