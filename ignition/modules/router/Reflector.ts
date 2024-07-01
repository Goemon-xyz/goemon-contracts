
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ReflectorModule = buildModule("ReflectorModule", (m) => {
    const ReflectorContract = m.contract("Reflector");

    return { ReflectorContract };
});

export default ReflectorModule;