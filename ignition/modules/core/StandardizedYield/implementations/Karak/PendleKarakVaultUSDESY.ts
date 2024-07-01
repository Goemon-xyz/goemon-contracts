
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleKarakVaultUSDESYModule = buildModule("PendleKarakVaultUSDESYModule", (m) => {
    const PendleKarakVaultUSDESYContract = m.contract("PendleKarakVaultUSDESY");

    return { PendleKarakVaultUSDESYContract };
});

export default PendleKarakVaultUSDESYModule;