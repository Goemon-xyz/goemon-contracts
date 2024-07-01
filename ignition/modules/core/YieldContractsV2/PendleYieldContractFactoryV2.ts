
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleYieldContractFactoryV2Module = buildModule("PendleYieldContractFactoryV2Module", (m) => {
    const PendleYieldContractFactoryV2Contract = m.contract("PendleYieldContractFactoryV2");

    return { PendleYieldContractFactoryV2Contract };
});

export default PendleYieldContractFactoryV2Module;