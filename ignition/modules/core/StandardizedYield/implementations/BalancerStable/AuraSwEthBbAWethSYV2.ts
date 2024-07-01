
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const AuraSwEthBbAWethSYV2Module = buildModule("AuraSwEthBbAWethSYV2Module", (m) => {
    const AuraSwEthBbAWethSYV2Contract = m.contract("AuraSwEthBbAWethSYV2");

    return { AuraSwEthBbAWethSYV2Contract };
});

export default AuraSwEthBbAWethSYV2Module;