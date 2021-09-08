// import {HardhatRuntimeEnvironment} from 'hardhat/types';
// import {DeployFunction} from 'hardhat-deploy/types';
//
// const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
//   const {deployments, getNamedAccounts} = hre;
//   const {deploy} = deployments;
//
//   const {deployer, tokenOwner} = await getNamedAccounts();
//
//   let Factory = await deploy('UniswapV2Factory', {
//     from: deployer,
//     contract: "UniswapV2Factory",
//     args: ["0x0000000000000000000000000000000000000000"],
//     log: true,
//   });
//
// };
// export default func;
// func.tags = ['UniswapV2Factory'];












// import {HardhatRuntimeEnvironment} from 'hardhat/types';
// import {DeployFunction} from 'hardhat-deploy/types';
//
// const {deployments} = require('hardhat');
//
// module.exports = async ({getNamedAccounts, deployments}) => {
//   const {deployIfDifferent, log} = deployments;
//   const namedAccounts = await getNamedAccounts();
//   const {deployer} = namedAccounts;
//
//
//   let Factory = await deploy('UniswapV2Factory', {
//     from: deployer,
//     contract: "UniswapV2Factory",
//     args: ["0x0000000000000000000000000000000000000000"],
//     log: true,
//   });
//
// };
// module.exports.tags = ['UniswapV2Factory'];


