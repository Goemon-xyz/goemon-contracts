
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleERC4626SYModule = buildModule("PendleERC4626SYModule", (m) => {
    const PendleERC4626SYContract = m.contract("PendleERC4626SY");

    return { PendleERC4626SYContract };
});

export default PendleERC4626SYModule;