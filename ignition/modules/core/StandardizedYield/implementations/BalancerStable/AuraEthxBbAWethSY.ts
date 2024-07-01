
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const AuraEthxBbAWethSYModule = buildModule("AuraEthxBbAWethSYModule", (m) => {
    const AuraEthxBbAWethSYContract = m.contract("AuraEthxBbAWethSY");

    return { AuraEthxBbAWethSYContract };
});

export default AuraEthxBbAWethSYModule;