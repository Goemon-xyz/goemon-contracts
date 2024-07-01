
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const KyberMathHelperModule = buildModule("KyberMathHelperModule", (m) => {
    const KyberMathHelperContract = m.contract("KyberMathHelper");

    return { KyberMathHelperContract };
});

export default KyberMathHelperModule;