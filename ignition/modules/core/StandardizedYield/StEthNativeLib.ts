
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const StETHNativeLibModule = buildModule("StETHNativeLibModule", (m) => {
    const StETHNativeLibLib = m.library("StETHNativeLib");

    return { StETHNativeLibLib };
});

export default StETHNativeLibModule;