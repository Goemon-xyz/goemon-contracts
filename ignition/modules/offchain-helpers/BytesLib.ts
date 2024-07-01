
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BytesLibModule = buildModule("BytesLibModule", (m) => {
    const BytesLibLib = m.library("BytesLib");

    return { BytesLibLib };
});

export default BytesLibModule;