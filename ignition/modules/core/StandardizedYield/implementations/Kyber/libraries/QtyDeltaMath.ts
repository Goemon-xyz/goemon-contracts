
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const QtyDeltaMathModule = buildModule("QtyDeltaMathModule", (m) => {
    const QtyDeltaMathLib = m.library("QtyDeltaMath");

    return { QtyDeltaMathLib };
});

export default QtyDeltaMathModule;