import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

type ContractJson = { abi: any; bytecode: string };
const artifacts: { [name: string]: ContractJson } = {
    UniswapV2Factory: require("../uniswap-v2-core/artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json"),
    SwapRouter: require("../artifacts/contracts/UniswapV2Router02.sol/UniswapV2Router02.json"),
    WETH9: require("../artifacts/contracts/test/WETH9.sol/WETH9.json")
};

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const {deployments, getNamedAccounts} = hre;
    const {deploy} = deployments;

    const {deployer, tokenOwner} = await getNamedAccounts();

    let WETH = await deploy('WETH9', {
        from: deployer,
        contract: "WETH9",
        args: [],
        log: true,
    });

};
export default func;
func.tags = ['WETH9'];