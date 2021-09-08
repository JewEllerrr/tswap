const hre = require("hardhat");
const ethers = hre.ethers;

const artifacts = {
    UniswapV2Factory: require("../uniswap-v2-core/artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json"),
    SwapRouter: require("../artifacts/contracts/UniswapV2Router02.sol/UniswapV2Router02.json"),
};


async function main() {


    const WETH9 = await hre.ethers.getContractFactory("WETH9");
    const weth = await WETH9.deploy();


    const UniswapV2Router02 = await hre.ethers.getContractFactory("UniswapV2Router02");
    const greeter = await UniswapV2Router02.deploy(weth.address);

    await greeter.deployed();

    console.log("Greeter deployed to:", greeter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });