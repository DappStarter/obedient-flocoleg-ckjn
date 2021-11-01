require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remain snow hunt bread swallow slab'; 
let testAccounts = [
"0x224599c679e8d79a58c3a44e0ec025d461e6a6294352ef4c17b3b8864ac3f52e",
"0xbf4df06ff9d8c2d75c2a8df341fbb6c137e0fab08bbcfa2ca1d430424d7ffc19",
"0x077f0b3d80f6ce734f5f575d76499b4892da1aaba191330ad23d281ec72b8c42",
"0x0e33b5c616253ff64e53972ed6b0be043a3ce45f7e335ee84c198b3f962e2d1d",
"0x2597bc3204c601242d8957ed1124a3bfe525b4b46baf4224ffdc0a96170413fe",
"0x2737e456c46eb5156c91348aeb8733fa0a944d84e5a9a8df6ad112abd9a91244",
"0x0d098238cde07a1c08d29f79eab905e11f4605032e44263e482dcc7acfa926f2",
"0x3fcb3b3b431f40dce23afbf5b0923ab178f641cddae233dd862e8ea3db45aff3",
"0x8bada868a2abc68439362d9b0986fdda9bfcfc7f3339c3dfd16132b816940b10",
"0x0870a6ca9c40ced1cc660ea5b7182ee9bc05e3742425faf9e90702cfc22d2a19"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


