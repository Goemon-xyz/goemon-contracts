
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleMulticallV1Module = buildModule("PendleMulticallV1Module", (m) => {
    const PendleMulticallV1Contract = m.contract("PendleMulticallV1");

    return { PendleMulticallV1Contract };
});

export default PendleMulticallV1Module;