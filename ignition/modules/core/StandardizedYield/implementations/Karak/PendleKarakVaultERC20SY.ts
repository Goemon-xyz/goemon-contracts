
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleKarakVaultERC20SYModule = buildModule("PendleKarakVaultERC20SYModule", (m) => {
    const PendleKarakVaultERC20SYContract = m.contract("PendleKarakVaultERC20SY");

    return { PendleKarakVaultERC20SYContract };
});

export default PendleKarakVaultERC20SYModule;