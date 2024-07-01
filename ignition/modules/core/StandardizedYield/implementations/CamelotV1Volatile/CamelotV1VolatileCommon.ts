
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CamelotV1VolatileCommonModule = buildModule("CamelotV1VolatileCommonModule", (m) => {
    const CamelotV1VolatileCommonContract = m.contract("CamelotV1VolatileCommon");

    return { CamelotV1VolatileCommonContract };
});

export default CamelotV1VolatileCommonModule;