
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleQiTokenSYModule = buildModule("PendleQiTokenSYModule", (m) => {
    const PendleQiTokenSYContract = m.contract("PendleQiTokenSY");

    return { PendleQiTokenSYContract };
});

export default PendleQiTokenSYModule;