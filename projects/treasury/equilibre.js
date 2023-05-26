const { treasuryExports, nullAddress } = require("../helper/treasury");


const equilibre = [
    '0x3a724E0082b0E833670cF762Ea6bd711bcBdFf37', // TREASURY ETH
    '0x79dE631fFb7291Acdb50d2717AE32D44D5D00732', // TREASURY KAVA
    '0x283270C265eB3D6e910920AdFf85e746C8063fed',
    '0x4722FE058da1D359c1428C8F9B8F5b4531b58D17',
    '0xAb7778933fb44514c864b2610b5d7E2A0bD91DDF',
    '0x498Dd5A79ab7e19Be1dA81738239214F807E3462',
    '0x78B3Ec25D285F7a9EcA8Da8eb6b20Be4d5D70E84',
    '0xfcb3E3797A77946891c88A841d35d47c8F22CF53',
    '0xd5524479C013d19e440872175400F396f35645fF',
    '0x3ca2c227D47DF650ffcD39b64527e7c6e2E91DD1',
    '0xc9C384a9E7e28f7Ef55903eb90947fe3ce71D475',
    '0xA43Dd020E147F3A9C5cCe6860Cc4f51Ff71B56dc',
    '0xb5B0c913acF48Bfb7bcB95e2F4fA241693dea513',
    '0x4396c6e2a70c6b3c7b8a1f9e4043632e1c93d430',
    '0xF9Ec0C05288d6726e1B3a7ccfcaEAc7b134d5F50'
]


const tokens = [
  nullAddress,
  "0xE1da44C0dA55B075aE8E2e4b6986AdC76Ac77d73", // VARA
  "0xfA9343C3897324496A05fC75abeD6bAC29f8A40f", // USDC
  "0xc86c7C0eFbd6A49B35E8714C5f59D99De09A225b", // WKAVA
  "0x765277EebeCA2e31912C9946eAe1021199B39C61", // DAI
  "0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D", // ETH
  "0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b", // WBTC
  "0xC19281F22A075E0F10351cd5D6Ea9f0AC63d4327", // BIFI
  "0x6c2c113c8cA73dB67224EF4D8C8dFCeC61e52a9C", // LQDR
  "0xb84Df10966a5D7e1ab46D9276F55d57bD336AFC7", // MAI
  "0xDb0E1e86B01c4ad25241b1843E407Efc4D615248", // USX
  "0x739ca6D71365a08f584c8FC4e1029045Fa8ABC4B", // ACS
  "0xd86C8d4279CCaFbec840c782BcC50D201f277419", // MARE
  "0x165DBb08de0476271714952C3C1F068693bd60D7", // TAROT
  "0x74ccbe53f77b08632ce0cb91d3a545bf6b8e0979", // fBOMB
  "0x9d9682577CA889c882412056669bd936894663fd", // swKAVA
  "0xABd380327Fe66724FFDa91A87c772FB8D00bE488", // BNB
  "0xEB466342C4d449BC9f53A865D5Cb90586f405215", // axlUSDC
  "0xE1E9dB9b4d51A8878f030094F7965edC5eEC7802", // xSHRAP
  "0x7ae97042a4a0eb4d1eb370c34bfec71042a056b7", // SLM
  "0x06beE9E7238a331B68D83Df3B5B9B16d5DBa83ff", // axlATOM
  "0x5E237e61469d1A5b85fA8fba63EB4D4498Ea8dEF", // YFX
  "0xEffaE8eB4cA7db99e954adc060B736Db78928467", // GMD
  "0x489e54EEc6C228A1457975Eb150A7EFb8350b5bE", // spVARA
  "0x443ab8d6ab303ce28f9031be91c19c6b92e59c8a", // TORE Old Toreus
  "0x8549724fcC84ee9ee6c7A676F1Ba2Cc2f43AAF5B", // TORE
  "0x53a5dD07127739e5038cE81eff24ec503A6CC479", // acsVARA
  "0xC09c73F7B32573d178138E76C0e286BA21085c20", // QI
  "0x0Fb3E4E84FB78C93E466a2117Be7bc8BC063E430", // CHAM
  "0x990e157fC8a492c28F5B50022F000183131b9026", // LION
  "0x471F79616569343e8e84a66F342B7B433b958154", // TIGER
  "0x38481Fdc1aF61E6E72E0Ff46F069315A59779C65", // BEAR
  "0x13db70Ad2f2b7064EbD5B0CAA13Af445a77360f7", // KONK
  "0xFa4384b298084A0ef13F378853DEDbB33A857B31", // cpVARA
  "0xB44a9B6905aF7c801311e8F4E76932ee959c663C", // USDT
  "0xde5ed76e7c05ec5e4572cfc88d1acea165109e44", // DEUS
  "0xD22a58f79e9481D1a88e00c343885A588b34b68B", // DEXI
  "0xde1e704dae0b4051e80dabb26ab6ad6c12262da0", // DEI
];


module.exports = treasuryExports({
  kava: {
    tokens, 
    owners: equilibre,
    ownTokenOwners: equilibre
  },
});
