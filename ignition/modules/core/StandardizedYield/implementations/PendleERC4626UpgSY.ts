
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleERC4626SYUpgModule = buildModule("PendleERC4626SYUpgModule", (m) => {
    const PendleERC4626SYUpgContract = m.contract("PendleERC4626SYUpg");

    return { PendleERC4626SYUpgContract };
});

export default PendleERC4626SYUpgModule;