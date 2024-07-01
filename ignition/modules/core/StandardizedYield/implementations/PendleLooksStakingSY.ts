
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleLooksStakingSYModule = buildModule("PendleLooksStakingSYModule", (m) => {
    const PendleLooksStakingSYContract = m.contract("PendleLooksStakingSY");

    return { PendleLooksStakingSYContract };
});

export default PendleLooksStakingSYModule;