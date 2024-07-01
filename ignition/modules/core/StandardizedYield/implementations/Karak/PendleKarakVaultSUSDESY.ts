
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleKarakVaultSUSDESYModule = buildModule("PendleKarakVaultSUSDESYModule", (m) => {
    const PendleKarakVaultSUSDESYContract = m.contract("PendleKarakVaultSUSDESY");

    return { PendleKarakVaultSUSDESYContract };
});

export default PendleKarakVaultSUSDESYModule;