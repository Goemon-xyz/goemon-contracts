
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const Curve3CrvPoolHelperModule = buildModule("Curve3CrvPoolHelperModule", (m) => {
    const Curve3CrvPoolHelperLib = m.library("Curve3CrvPoolHelper");

    return { Curve3CrvPoolHelperLib };
});

export default Curve3CrvPoolHelperModule;