
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ratherModule = buildModule("ratherModule", (m) => {
    const ratherContract = m.contract("rather");

    return { ratherContract };
});

export default ratherModule;