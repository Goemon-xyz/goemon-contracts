
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const StablePoolUserDataModule = buildModule("StablePoolUserDataModule", (m) => {
    const StablePoolUserDataLib = m.library("StablePoolUserData");

    return { StablePoolUserDataLib };
});

export default StablePoolUserDataModule;