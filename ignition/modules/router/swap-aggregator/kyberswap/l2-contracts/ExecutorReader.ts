
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ExecutorReaderModule = buildModule("ExecutorReaderModule", (m) => {
    const ExecutorReaderLib = m.library("ExecutorReader");

    return { ExecutorReaderLib };
});

export default ExecutorReaderModule;