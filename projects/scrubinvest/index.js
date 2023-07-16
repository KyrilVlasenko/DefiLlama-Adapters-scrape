const { sumUnknownTokens } = require("../helper/unknownTokens");
async function tvl(_, _b, _cb, { api, }) {

  const calls = [
    { target: '0x075CA53543D304c02Ee692C0b691770AEB273dA4', params: '0x4402Cf5433D57266563979654d20887AcE672393' },
    { target: '0x69cEf0795FFFa66DfC4Ffc90E8Bd05c399388650', params: '0xa2355f35Ab85f1771FB1085a0e5b2599B8F47457' },
    { target: '0xe2C935041aEF672974A31d46c41A4F292982e621', params: '0x2c1C6aaB89272d07B7f78bFe93eefb6D2631Cf94' },
    { target: '0x46B9FCac1B698AE54b9c1D52A734338964e28AEE', params: '0x070110b0cAd64833b1a6a9E86337A4e4eE786607' },
    { target: '0xA250a3b6a5e5E8b398092537951F8Bd80639ed5c', params: '0xE04539bD52618B7d197Be54B3e4D80732082906E' },
    { target: '0xCa0d15B4BB6ad730fE40592f9E25A2E052842c92', params: '0xEa892552BD31A20F42ceb3476D6A280c405883d0' },
    { target: '0xa27a1f03479cfe4B0b97Fd8c772a84aD815C1946', params: '0xa1FA74fD861FFf2fc5f7a618A05beB12709fB419' },
    { target: '0x74AE6bB3138DB1969c52f39e2c311d997528633B', params: '0x2D1D648c2AEdf62037f2b80f9cC8c93258179380' },
    { target: '0x8EEA85dA61b397EaB933C001DAAD6fC1C5A4c67C', params: '0xcf4673F714183C42DADc1B42DAC21BE09cfc3684' },
    { target: '0xc28fcef5970fd23e5bfcdc31ce1ba72ef98cc70a', params: '0xef7541FCa94988fA423bC418a854f7967f83a3E0' },
    { target: '0x371d33963fb89ec9542a11ccf955b3a90391f99f', params: '0x43Ac7f627e41EBDa7515FEaCa425306AaB9cB602' },
    { target: '0x1E5573b2A7C1D08112d0Ff22e9F2D8EFc9583532', params: '0x9e890FBD4295D92c41fA12a2083b51C387699Fd8' },
    { target: '0x8fE243F8B47107c468537D74514d7c52Cd61E937', params: '0x56a9c9230d6D3b7bF147c10fdDBCD8F2eB1a2B6d' },
    //NEW LPs 14/07 - GAUGE / CONTRACT
    { target: '0x5383dEB37479599a33584f7Bbc346ab299e30FF0', params: '0x79eb3848B7B4630D1d883172f8e56B2e8fb18521' },
    { target: '0x776d2Ae19FC4c5982D5b20d8c14BCDae09755796', params: '0x1C415Ce79D0A18A4aA835D3d9083d2aF4d7894FC' },
    { target: '0x1f343A11b317EB54F08D80FD3cF9d706eDA5982c', params: '0xF35265f9713FD7ab6a27D387B2D02C1306FFB606' },
    
  ]
  const bals = await api.multiCall({    abi: 'erc20:balanceOf', calls  })
  const lps = await api.multiCall({  abi: 'address:stake', calls: calls.map(i => i.target)})
  api.addTokens(lps, bals)

  return sumUnknownTokens({
    api,
    tokensAndOwners: [
      // YieldOptimizers Mare
      ['0x066C98E48238e8D77006a5fA14EC3B080Fd2848d', '0xcd017B495DF1dE2DC8069b274e2ddfBB78561176'],
      ['0x92e17FD2DA50775FBD423702E4717cCD7FB2A6BB', '0x88555c4d8e53ffB223aB5baDe0B5e6B2Cd3966c4'],
      ['0x58333b7D0644b52E0e56cC3803CA94aF9e0B52C3', '0xB4Ba7ba722eacAE8f1e4c6213AF05b5E8B27dbdB'],
      ['0x24149e2D0D3F79EBb7Fc464b09e3628dE395b39D', '0xB9774bB2A18Af59Ec9bf86dCaeC07473A2D2F230'],
      ['0x0B6c2a9d4d739778dF6cD1cf815754BD1438063c', '0x3CcA2C0d433E00433082ba16e968CA11dA6Dc156'],
      ['0x2f9e61D4E9A9A3694CcDc287c790EA5cc3302E88', '0x1504B9EDdD57Ed8252b3b3b407DdE27B72A80790'],
      ['0x350c4A0aC240755Bb6432FeB907eCAFbbBc75770', '0xC05021F3b3601BF33aB59dc75577B85985ACaab7'],
      // also count base assets if available
      ['0xfA9343C3897324496A05fC75abeD6bAC29f8A40f', '0xcd017B495DF1dE2DC8069b274e2ddfBB78561176'],
      ['0xB44a9B6905aF7c801311e8F4E76932ee959c663C', '0x88555c4d8e53ffB223aB5baDe0B5e6B2Cd3966c4'],
      ['0x765277EebeCA2e31912C9946eAe1021199B39C61', '0xB4Ba7ba722eacAE8f1e4c6213AF05b5E8B27dbdB'],
      ['0xc86c7C0eFbd6A49B35E8714C5f59D99De09A225b', '0xB9774bB2A18Af59Ec9bf86dCaeC07473A2D2F230'],
      ['0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d', '0x3CcA2C0d433E00433082ba16e968CA11dA6Dc156'],
      ['0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d', '0x1504B9EDdD57Ed8252b3b3b407DdE27B72A80790'],
      ['0xc86c7C0eFbd6A49B35E8714C5f59D99De09A225b', '0xC05021F3b3601BF33aB59dc75577B85985ACaab7'],
      // New Scrub Pool
      ['0x471F79616569343e8e84a66F342B7B433b958154', '0x67041094c4fc1492A1AB988Fb8De0ab4A0a4A080'],

      // WETH
      
      // Vaults Equilibre Scrub
      // ['0xeA848151ACB1508988e56Ee7689F004df2B15ced', "0x4402Cf5433D57266563979654d20887AcE672393"],
      // ['0x7f8ed7d31795dc6f5fc5f6685b11419674361501', "0xa2355f35Ab85f1771FB1085a0e5b2599B8F47457"],
      // ['0x09d6561b3795ae237e42f7adf3dc83742e10a2e8', "0x2c1C6aaB89272d07B7f78bFe93eefb6D2631Cf94"],
    ],
    useDefaultCoreAssets: true,
    resolveLP: true,
    lps
  })
}

module.exports = {
  misrepresentedTokens: true,
  kava: {
    tvl,
  }
};
