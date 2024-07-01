
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const constructionModule = buildModule("constructionModule", (m) => {
    const constructionContract = m.contract("construction");

    return { constructionContract };
});

export default constructionModule;