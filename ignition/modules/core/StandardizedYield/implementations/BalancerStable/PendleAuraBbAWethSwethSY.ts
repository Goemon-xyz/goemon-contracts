
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleAuraBbAWethSwethSYModule = buildModule("PendleAuraBbAWethSwethSYModule", (m) => {
    const PendleAuraBbAWethSwethSYContract = m.contract("PendleAuraBbAWethSwethSY");

    return { PendleAuraBbAWethSwethSYContract };
});

export default PendleAuraBbAWethSwethSYModule;