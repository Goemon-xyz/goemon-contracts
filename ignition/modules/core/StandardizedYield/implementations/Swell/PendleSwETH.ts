
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SwETHSYModule = buildModule("SwETHSYModule", (m) => {
    const SwETHSYContract = m.contract("SwETHSY");

    return { SwETHSYContract };
});

export default SwETHSYModule;