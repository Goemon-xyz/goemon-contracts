
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendlePrincipalTokenModule = buildModule("PendlePrincipalTokenModule", (m) => {
    const PendlePrincipalTokenContract = m.contract("PendlePrincipalToken");

    return { PendlePrincipalTokenContract };
});

export default PendlePrincipalTokenModule;