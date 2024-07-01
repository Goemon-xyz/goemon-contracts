
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LimitBackendHelperModule = buildModule("LimitBackendHelperModule", (m) => {
    const LimitBackendHelperContract = m.contract("LimitBackendHelper");

    return { LimitBackendHelperContract };
});

export default LimitBackendHelperModule;