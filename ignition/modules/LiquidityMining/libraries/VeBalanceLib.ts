
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const VeBalanceLibModule = buildModule("VeBalanceLibModule", (m) => {
    const VeBalanceLibLib = m.library("VeBalanceLib");

    return { VeBalanceLibLib };
});

export default VeBalanceLibModule;