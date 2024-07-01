
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BytesHelperModule = buildModule("BytesHelperModule", (m) => {
    const BytesHelperLib = m.library("BytesHelper");

    return { BytesHelperLib };
});

export default BytesHelperModule;