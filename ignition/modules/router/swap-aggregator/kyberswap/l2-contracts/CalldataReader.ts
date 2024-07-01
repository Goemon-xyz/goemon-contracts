
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CalldataReaderModule = buildModule("CalldataReaderModule", (m) => {
    const CalldataReaderLib = m.library("CalldataReader");

    return { CalldataReaderLib };
});

export default CalldataReaderModule;