
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const StringLibModule = buildModule("StringLibModule", (m) => {
    const StringLibLib = m.library("StringLib");

    return { StringLibLib };
});

export default StringLibModule;