
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PendleCurveUsdd3CrvSYModule = buildModule("PendleCurveUsdd3CrvSYModule", (m) => {
    const PendleCurveUsdd3CrvSYContract = m.contract("PendleCurveUsdd3CrvSY");

    return { PendleCurveUsdd3CrvSYContract };
});

export default PendleCurveUsdd3CrvSYModule;