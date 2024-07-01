
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleQiTokenHelperModule = buildModule("PendleQiTokenHelperModule", (m) => {
    const PendleQiTokenHelperContract = m.contract("PendleQiTokenHelper");

    return { PendleQiTokenHelperContract };
});

export default PendleQiTokenHelperModule;