
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ActionMintRedeemStaticModule = buildModule("ActionMintRedeemStaticModule", (m) => {
    const ActionMintRedeemStaticContract = m.contract("ActionMintRedeemStatic");

    return { ActionMintRedeemStaticContract };
});

export default ActionMintRedeemStaticModule;