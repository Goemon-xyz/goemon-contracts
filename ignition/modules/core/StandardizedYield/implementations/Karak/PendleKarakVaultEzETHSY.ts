
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleKarakVaultEzETHSYModule = buildModule("PendleKarakVaultEzETHSYModule", (m) => {
    const PendleKarakVaultEzETHSYContract = m.contract("PendleKarakVaultEzETHSY");

    return { PendleKarakVaultEzETHSYContract };
});

export default PendleKarakVaultEzETHSYModule;