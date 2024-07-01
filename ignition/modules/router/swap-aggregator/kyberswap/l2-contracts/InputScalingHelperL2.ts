
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const InputScalingHelperL2Module = buildModule("InputScalingHelperL2Module", (m) => {
    const InputScalingHelperL2Lib = m.library("InputScalingHelperL2");

    return { InputScalingHelperL2Lib };
});

export default InputScalingHelperL2Module;