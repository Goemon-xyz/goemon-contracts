
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ExcessivelySafeCallModule = buildModule("ExcessivelySafeCallModule", (m) => {
    const ExcessivelySafeCallLib = m.library("ExcessivelySafeCall");

    return { ExcessivelySafeCallLib };
});

export default ExcessivelySafeCallModule;