
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleGMV2TokenSYModule = buildModule("PendleGMV2TokenSYModule", (m) => {
    const PendleGMV2TokenSYContract = m.contract("PendleGMV2TokenSY");

    return { PendleGMV2TokenSYContract };
});

export default PendleGMV2TokenSYModule;