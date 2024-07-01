
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendlePrincipalTokenV2Module = buildModule("PendlePrincipalTokenV2Module", (m) => {
    const PendlePrincipalTokenV2Contract = m.contract("PendlePrincipalTokenV2");

    return { PendlePrincipalTokenV2Contract };
});

export default PendlePrincipalTokenV2Module;