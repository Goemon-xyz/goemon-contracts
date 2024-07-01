
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const AddressProviderModule = buildModule("AddressProviderModule", (m) => {
    const AddressProviderContract = m.contract("AddressProvider");

    return { AddressProviderContract };
});

export default AddressProviderModule;