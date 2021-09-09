import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import { Signer, Contract, ContractFactory } from "ethers";


const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy} = deployments;

  const {deployer, tokenOwner} = await getNamedAccounts();

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
