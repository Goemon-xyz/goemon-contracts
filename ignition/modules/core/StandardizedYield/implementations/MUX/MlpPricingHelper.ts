
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MlpPricingHelperModule = buildModule("MlpPricingHelperModule", (m) => {
    const MlpPricingHelperContract = m.contract("MlpPricingHelper");

    return { MlpPricingHelperContract };
});

export default MlpPricingHelperModule;