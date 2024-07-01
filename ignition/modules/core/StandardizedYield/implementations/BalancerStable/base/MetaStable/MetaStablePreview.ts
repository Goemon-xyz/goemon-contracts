
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const willModule = buildModule("willModule", (m) => {
    const willContract = m.contract("will");

    return { willContract };
});

export default willModule;