
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleKarakVaultWEETHSYModule = buildModule("PendleKarakVaultWEETHSYModule", (m) => {
    const PendleKarakVaultWEETHSYContract = m.contract("PendleKarakVaultWEETHSY");

    return { PendleKarakVaultWEETHSYContract };
});

export default PendleKarakVaultWEETHSYModule;