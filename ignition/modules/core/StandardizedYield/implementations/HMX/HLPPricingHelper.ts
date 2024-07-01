
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const HLPPricingHelperModule = buildModule("HLPPricingHelperModule", (m) => {
    const HLPPricingHelperContract = m.contract("HLPPricingHelper");

    return { HLPPricingHelperContract };
});

export default HLPPricingHelperModule;