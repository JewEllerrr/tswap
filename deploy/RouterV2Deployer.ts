import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import { Signer, Contract, ContractFactory } from "ethers";


const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy} = deployments;

  const {deployer, tokenOwner} = await getNamedAccounts();
  const Factory = await deployments.get('UniswapV2Factory');
  const WETH9 = await deployments.get('WETH9');

  let Router = await deploy('UniswapV2Router02', {
    from: deployer,
    contract: "UniswapV2Router02",
    //ard 1 - factory.address, arg-2 weth.address
    args: [Factory.address, WETH9.address],
    log: true,
  });
};
export default func;
func.tags = ['UniswapV2Router02'];


// import {HardhatRuntimeEnvironment} from 'hardhat/types';
// import {DeployFunction} from 'hardhat-deploy/types';
//
// const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
//   const {deployments, getNamedAccounts} = hre;
//   const {deploy} = deployments;
//
//   const {deployer, tokenOwner} = await getNamedAccounts();
//
//   let WETH = await deploy('WETH9', {
//     from: deployer,
//     contract: "WETH9",
//     args: [],
//     log: true,
//   });
//
//   if (WETH.newlyDeployed) {
//     let Factory = await deploy('UniswapV2Factory', {
//       from: deployer,
//       contract: "UniswapV2Factory",
//       args: ["0x0000000000000000000000000000000000000000"],
//       log: true,
//     });
//
//     if (Factory.newlyDeployed) {
//       let Router = await deploy('UniswapV2Router02', {
//         from: deployer,
//         contract: "UniswapV2Router02",
//         args: [Factory.address, WETH.address],
//         log: true,
//       });
//     }
//
//   }
//
// };
// export default func;
// func.tags = ['UniswapV2'];


// import { Signer, Contract, ContractFactory } from "ethers";
//
// type ContractJson = { abi: any; bytecode: string };
// const artifacts: { [name: string]: ContractJson } = {
//   UniswapV2Factory: require("../uniswap-v2-core/artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json"),
//   SwapRouter: require("../artifacts/contracts/UniswapV2Router02.sol/UniswapV2Router02.json"),
//   WETH: require("../artifacts/contracts/test/WETH9.sol/WETH9.json")
// };
//
// // TODO: Should replace these with the proper typechain output.
// type IUniswapV2Factory = Contract;
//
// export class UniswapV2Deployer {
//   static async deploy(actor: Signer): Promise<{ [name: string]: Contract }> {
//     const deployer = new UniswapV2Deployer(actor);
//
//     const weth9 = await deployer.deployWETH9();
//     const factory = await deployer.deployFactory();
//     const router = await deployer.deployRouter(factory.address, weth9.address);
//     console.log("hello")
//
//     return {
//       weth9,
//       factory,
//       router
//     };
//   }
//
//   deployer: Signer;
//
//   constructor(deployer: Signer) {
//     this.deployer = deployer;
//   }
//
//   async deployWETH9() {
//     return await this.deployContract<Contract>(
//         artifacts.WETH9.abi,
//         artifacts.WETH9.bytecode,
//         [],
//         this.deployer
//     );
//   }
//
//   async deployFactory() {
//     return await this.deployContract<Contract>(
//         artifacts.UniswapV3Factory.abi,
//         artifacts.UniswapV3Factory.bytecode,
//         [],
//         this.deployer
//     );
//   }
//
//   async deployRouter(factoryAddress: string, weth9Address: string) {
//     return await this.deployContract<Contract>(
//         artifacts.SwapRouter.abi,
//         artifacts.SwapRouter.bytecode,
//         [factoryAddress, weth9Address],
//         this.deployer
//     );
//   }
//
//   private async deployContract<T>(
//       abi: any,
//       bytecode: string,
//       deployParams: Array<any>,
//       actor: Signer
//   ) {
//     const factory = new ContractFactory(abi, bytecode, actor);
//     return await factory.deploy(...deployParams);
//   }
// }




