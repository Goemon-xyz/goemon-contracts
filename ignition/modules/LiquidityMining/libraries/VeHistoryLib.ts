
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CheckpointHelperModule = buildModule("CheckpointHelperModule", (m) => {
    const CheckpointHelperLib = m.library("CheckpointHelper");

    return { CheckpointHelperLib };
});

export default CheckpointHelperModule;