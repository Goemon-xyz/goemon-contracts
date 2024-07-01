
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CalldataWriterModule = buildModule("CalldataWriterModule", (m) => {
    const CalldataWriterLib = m.library("CalldataWriter");

    return { CalldataWriterLib };
});

export default CalldataWriterModule;