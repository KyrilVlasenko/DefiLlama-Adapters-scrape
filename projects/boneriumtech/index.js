const { getUniTVL } = require('../helper/unknownTokens')

module.exports = {
  bone: {
    tvl: getUniTVL({ factory: '0x9e98c46825da5f6622eBFA0bc8d278c61b763802', useDefaultCoreAssets: true, })
  }
}