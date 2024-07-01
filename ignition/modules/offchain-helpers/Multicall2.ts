
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const Multicall2Module = buildModule("Multicall2Module", (m) => {
    const Multicall2Contract = m.contract("Multicall2");

    return { Multicall2Contract };
});

export default Multicall2Module;