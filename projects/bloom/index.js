const sdk = require('@defillama/sdk');
const abi = require('./abi.json');
const { sumTokens2 } = require('../helper/unwrapLPs');

const REGISTRY = '0xBbBe37FE58e9859b6943AC53bDf4d0827f7F0034';


async function getIB01USD(chain) {
    const oracleAddresses = {
        [Chain.ethereum]: "0x32d1463eb53b73c095625719afa544d5426354cb",
    };
    const iB01USDRoundData = await sdk.api.abi.call({
        chain: chain,
        target: oracleAddresses[chain],
        params: [],
        abi: abi['latestAnswer'],
    });

    return iB01USDRoundData.output / 1e8;
}

async function tvl(timestamp, block, chainBlocks, {api}) {
    const activePools = await api.call({ target: REGISTRY, abi: abi['getActiveTokens'] });
    const inactivePools = await api.call({ target: REGISTRY, abi: abi['getInactiveTokens'] });
    const allPools = [...activePools, ...inactivePools];
    return sumTokens2({ owners: allPools, tokens: ['0xCA30c93B02514f86d5C86a6e375E3A330B435Fb5'], api})
}


module.exports = {
    methodology: 'Gets the active pools from the registry and adds the total supply of each pool',
    ethereum: {
        tvl,
    },
};
