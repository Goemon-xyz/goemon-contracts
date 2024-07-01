
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const EmptyUUPSModule = buildModule("EmptyUUPSModule", (m) => {
    const EmptyUUPSContract = m.contract("EmptyUUPS");

    return { EmptyUUPSContract };
});

export default EmptyUUPSModule;