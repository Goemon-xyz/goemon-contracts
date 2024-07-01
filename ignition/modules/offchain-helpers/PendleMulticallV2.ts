
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleMulticallV2Module = buildModule("PendleMulticallV2Module", (m) => {
    const PendleMulticallV2Contract = m.contract("PendleMulticallV2");

    return { PendleMulticallV2Contract };
});

export default PendleMulticallV2Module;