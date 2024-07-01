
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ArrayLibModule = buildModule("ArrayLibModule", (m) => {
    const ArrayLibLib = m.library("ArrayLib");

    return { ArrayLibLib };
});

export default ArrayLibModule;