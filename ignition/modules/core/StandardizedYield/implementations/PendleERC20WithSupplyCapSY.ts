
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleERC20WithSupplyCapSYModule = buildModule("PendleERC20WithSupplyCapSYModule", (m) => {
    const PendleERC20WithSupplyCapSYContract = m.contract("PendleERC20WithSupplyCapSY");

    return { PendleERC20WithSupplyCapSYContract };
});

export default PendleERC20WithSupplyCapSYModule;