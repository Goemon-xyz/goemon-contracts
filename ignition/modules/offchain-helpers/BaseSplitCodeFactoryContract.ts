
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BaseSplitCodeFactoryContractModule = buildModule("BaseSplitCodeFactoryContractModule", (m) => {
    const BaseSplitCodeFactoryContractContract = m.contract("BaseSplitCodeFactoryContract");

    return { BaseSplitCodeFactoryContractContract };
});

export default BaseSplitCodeFactoryContractModule;