// beta test pools
const ARBITRUM_ONE_USDT_PROFITABLE =
  "0x7D7bf8B7FfC364CA7dDA1Bb66C88108F00086551";
const ARBITRUM_ONE_USDC_e_PROFITABLE =
  "0x775AFb156D7bCa10bE12DC40E06e9E0EBFEb5E15";
const ARBITRUM_ONE_WBTC_PROFITABLE =
  "0x8648F1cd46B103F091a7a0f2EDD78Af492Aae788";
const ARBITRUM_ONE_WETH_PROFITABLE =
  "0x0eeD421F88b0818Cba38aF96e33d1f42C988c726";
const ARBITRUM_ONE_ARB_PROFITABLE =
  "0x32bD19a79DC462b9d18f2Db2593C78aB9ea630BC";

const pools = [
  { id: ARBITRUM_ONE_USDT_PROFITABLE, startBlock: 136446283 },
  { id: ARBITRUM_ONE_USDC_e_PROFITABLE, startBlock: 136446308 },
  { id: ARBITRUM_ONE_WBTC_PROFITABLE, startBlock: 136446334 },
  { id: ARBITRUM_ONE_WETH_PROFITABLE, startBlock: 136446358 },
  { id: ARBITRUM_ONE_ARB_PROFITABLE, startBlock: 136446383 },
];

module.exports = {
  pools,
};
