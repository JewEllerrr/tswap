import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import "@nomiclabs/hardhat-etherscan";
import {node_url, get_private_key, get_api_key} from './utils/network';

const config: HardhatUserConfig = {
    solidity: {
        compilers: [
            {
                version: "0.5.16",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1000,
                    },
                },
            },
            {
                version: "0.6.6",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1000,
                    },
                },
                //settings: {},
            },

        ],
    },
    etherscan: {
        apiKey: get_api_key('rinkeby')
    },
    namedAccounts: {
        deployer: 0,
        tokenOwner: 1,
    },
    networks: {
        rinkeby: {
            url: node_url('rinkeby'),
            accounts: [get_private_key('rinkeby')],
            saveDeployments: true,
        },
    },

    external: {
        contracts: [
            {
                artifacts: "uniswap-v2-core/artifacts",
                deploy: "uniswap-v2-core/deploy"
            },
        ],
        // deployments: {
        //     rinkeby: ["uniswap-v2-core/build/contracts"],
        // },
    }


};
export default config;
