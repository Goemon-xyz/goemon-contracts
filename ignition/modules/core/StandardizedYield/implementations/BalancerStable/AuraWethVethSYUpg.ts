
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const AuraWethVethSYUpgModule = buildModule("AuraWethVethSYUpgModule", (m) => {
    const AuraWethVethSYUpgContract = m.contract("AuraWethVethSYUpg");

    return { AuraWethVethSYUpgContract };
});

export default AuraWethVethSYUpgModule;