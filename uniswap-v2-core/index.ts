// import { task } from "hardhat/config";
// import "@nomiclabs/hardhat-ethers";
// import "./type-extensions";
//
// // @ts-ignore
// import Table from "cli-table3";
//
// import { UniswapV2Deployer } from "./deploy/UniswapV2Deployer";
// import "hardhat-deploy-ethers/dist/src/internal/type-extensions";
//
// task("deploy-uniswap", "Deploys Uniswap V2 contracts", async (args, hre) => {
//     const [actor] = await hre.ethers.getSigners();
//     const contracts = await UniswapV2Deployer.deploy(actor);
//
//     const table = new Table({
//         head: ["Contract", "Address"],
//         style: { border: [] },
//     });
//     for (const item of Object.keys(contracts)) {
//         table.push([item, contracts[item].address]);
//     }
//     console.info(table.toString());
// });