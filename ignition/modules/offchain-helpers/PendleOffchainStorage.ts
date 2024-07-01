
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleOffchainStorageModule = buildModule("PendleOffchainStorageModule", (m) => {
    const PendleOffchainStorageContract = m.contract("PendleOffchainStorage");

    return { PendleOffchainStorageContract };
});

export default PendleOffchainStorageModule;