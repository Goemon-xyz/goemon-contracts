
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SimulateHelperModule = buildModule("SimulateHelperModule", (m) => {
    const SimulateHelperContract = m.contract("SimulateHelper");

    return { SimulateHelperContract };
});

export default SimulateHelperModule;