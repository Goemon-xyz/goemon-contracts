
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CommonModule = buildModule("CommonModule", (m) => {
    const CommonLib = m.library("Common");

    return { CommonLib };
});

export default CommonModule;