const { yieldHelper, } = require("../helper/yieldHelper")

const masterchef = '0x6c8eE277A958751c97e8d0AFfEbbB8478bC755ce'
const froggy = '0x5217483171b2550C74234C583620C355b74b3095'

module.exports = yieldHelper({
  project: 'froggy-ink',
  chain: 'era',
  masterchef: masterchef,
  nativeToken: froggy,
  abis: {
    poolInfo: 'function poolInfo(uint256) view returns (address want, uint256 , uint256 , uint256 , uint256 , uint256 , uint256 , uint256 amount, uint256 , address strat)',
    poolLength: 'function poolLength() view returns (uint256)'
  }
})