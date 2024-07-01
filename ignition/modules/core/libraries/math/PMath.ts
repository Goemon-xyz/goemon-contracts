
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PMathModule = buildModule("PMathModule", (m) => {
    const PMathLib = m.library("PMath");

    return { PMathLib };
});

export default PMathModule;