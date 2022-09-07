const sdk = require("@defillama/sdk");
const abi = require("./abi.json");
const retry = require("async-retry");
const axios = require("axios");
const { getBlock } = require("../helper/getBlock");
const usdc = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
const prxy = "0xab3d689c22a2bb821f50a4ff0f21a7980dcb8591";
const prxyTransformed = `polygon:${prxy}`;
const wbtc = "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599";
const btcpx = "0x9C32185b81766a051E08dE671207b34466DD1021";
const farmProxy = "0x256116a8Ea8bAd13897462117d88082C464B68e1";
const fAbi = require("./fAbi.json");
const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider('https://rpc-mainnet.maticvigil.com/v1/d8df1938ab3aecb7dd672ca671a5d5dd0b75d9d1'));
let contract1 = new web3.eth.Contract(fAbi, '0x256116a8Ea8bAd13897462117d88082C464B68e1');


async function getPrograms() {
  const programList = await retry(
    async (bail) =>
      await axios.get("https://api.btcpx.io/api/v1/prxy-staking/list/0/10", {
        headers: {
          "x-signature":
            "f104e31bbc788b25c12ad65f4063bea9c9a731004212002f3f7c773f9d72f7a1",
          origin: "https://app.prxy.fi",
        },
      })
  );
  return programList.data.txs;
}

function tvl(chain, staking) {
  return async (timestamp, block, chainBlocks) => {
    block = await getBlock(timestamp, chain, chainBlocks);
    let balances = {};

    if (chain == "polygon") {
      balances[prxyTransformed] = (
        await sdk.api.erc20.balanceOf({
          target: prxy,
          owner: "0x015CEe3aB6d03267B1B2c05D2Ac9e2250AF5268d",
          block,
          chain,
        })
      ).output;
    }

    const programs = await getPrograms();
    for (const program of programs) {
      if (program.chain.toLowerCase() == chain) {
        const staked = (
          await sdk.api.abi.call({
            target: program.stakingContractAddress,
            abi,
            block,
            chain,
          })
        ).output;
        sdk.util.sumSingleBalance(balances, usdc, staked);
      }
    }

    balances[farmProxy] =  await contract1.methods.getTVLInUsd().call(); //value will be divided by 1e6

    balances[wbtc] = (
      await sdk.api.erc20.totalSupply({
        block,
        target: btcpx,
        chain,
      })
    ).output;

    if (staking) {
      return {
        [prxyTransformed]:
          prxyTransformed in balances ? balances[prxyTransformed] : 0,
      };
    } else {
      delete balances[prxyTransformed];
      return balances;
    }
  };
}

module.exports = {
    misrepresentedTokens: true,
    polygon: {
        tvl: tvl("polygon", false),
        staking: tvl("polygon", true),
        farmProxy: tvl("polygon",false),
    },
    ethereum: {
        tvl: tvl("ethereum", false),
        staking: tvl("ethereum", true),
        farmProxy: tvl("ethereum",false),
    },
    methodology: `BTC Proxy offers a unique institutional-grade wrapped Bitcoin solution that leverages Polygon technology to bring Bitcoin to DeFi 2.0 with no gas and no slippage and insured custody. BTC Proxy features (3,3) Staking and Bonding via the PRXY Governance token`,
};
