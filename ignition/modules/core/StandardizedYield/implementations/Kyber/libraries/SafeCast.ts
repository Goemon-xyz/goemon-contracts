
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SafeCastModule = buildModule("SafeCastModule", (m) => {
    const SafeCastLib = m.library("SafeCast");

    return { SafeCastLib };
});

export default SafeCastModule;