
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleGovernanceProxyModule = buildModule("PendleGovernanceProxyModule", (m) => {
    const PendleGovernanceProxyContract = m.contract("PendleGovernanceProxy");

    return { PendleGovernanceProxyContract };
});

export default PendleGovernanceProxyModule;