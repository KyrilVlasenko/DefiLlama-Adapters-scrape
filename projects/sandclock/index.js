const sdk = require('@defillama/sdk');
const { sumTokens2 } = require('../helper/unwrapLPs')

const LUSD = '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0';
const WETH = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
const USDC = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
const YEARN_VAULT = '0x4fe4bf4166744bcbc13c19d959722ed4540d3f6a';
const LIQUITY_VAULT = '0x91a6194f1278f6cf25ae51b604029075695a74e5';
const WETH_VAULT = '0x1Fc623b96c8024067142Ec9c15D669E5c99c5e9D';
const USDC_VAULT = '0x1038Ff057b7092f17807358c6f68b42661d15caB';

const v1Vaults = [YEARN_VAULT, LIQUITY_VAULT];
const v2Vaults = [WETH_VAULT, USDC_VAULT];

async function tvl(_, _b, _cb, { api, chain, block, }) {
  const balances = {}
  const v1VaultBalances = await api.multiCall({
    abi: 'uint256:totalUnderlying',
    calls: v1Vaults,
  })
  v1VaultBalances.forEach(i => sdk.util.sumSingleBalance(balances, LUSD, i, chain))
  const v2VaultBalances = await api.multiCall({
    abi: 'uint256:totalAssets',
    calls: v2Vaults,
  })
  sdk.util.sumSingleBalance(balances, WETH, v2VaultBalances[0], chain)
  sdk.util.sumSingleBalance(balances, USDC, v2VaultBalances[1], chain)
  return sumTokens2({ balances, chain, block, })
}

module.exports = {
  misrepresentedTokens: false,
  methodology: 'add underlying asset balances in all the vaults together.',
  doublecounted: true,
  start: 15308000, // The first vault YEARN_VAULT was deployed
  ethereum: {
    tvl,
  }
};