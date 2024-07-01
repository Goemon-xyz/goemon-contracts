
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CurveUsdd3CrvPoolHelperModule = buildModule("CurveUsdd3CrvPoolHelperModule", (m) => {
    const CurveUsdd3CrvPoolHelperLib = m.library("CurveUsdd3CrvPoolHelper");

    return { CurveUsdd3CrvPoolHelperLib };
});

export default CurveUsdd3CrvPoolHelperModule;