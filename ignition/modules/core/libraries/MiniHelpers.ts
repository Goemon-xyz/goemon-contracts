
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MiniHelpersModule = buildModule("MiniHelpersModule", (m) => {
    const MiniHelpersLib = m.library("MiniHelpers");

    return { MiniHelpersLib };
});

export default MiniHelpersModule;