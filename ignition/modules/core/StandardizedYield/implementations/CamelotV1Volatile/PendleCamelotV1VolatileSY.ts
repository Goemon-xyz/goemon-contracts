
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleCamelotV1VolatileSYModule = buildModule("PendleCamelotV1VolatileSYModule", (m) => {
    const PendleCamelotV1VolatileSYContract = m.contract("PendleCamelotV1VolatileSY");

    return { PendleCamelotV1VolatileSYContract };
});

export default PendleCamelotV1VolatileSYModule;