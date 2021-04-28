require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food toward remember mad million coral light army gasp'; 
let testAccounts = [
"0x4dd7c8ad6eb6136c83845c8f30d83b8d778ac5d9abdac3620ca30190286b6f96",
"0x0b39f8a23301779b0d0725a837f2ff4129254eb866d7712491a033c25a329199",
"0x96b603d8835300e3d5d1da485a8e2df87a7a410650b988165060850705f99f98",
"0x7e0f140bb75412904c79d0bb08941fc183526be7343087cbaf0944d90d187dd5",
"0x4124905b2ccce1cc378eb05183d8fe7f11152757d15748a976b941c6830c9545",
"0x1545da23a00e83de3bacfdc3d5ffd04294c12aa9d01bb305cc6e2b0e7a447ca1",
"0x8a337a754eebcf9bef838789a8e83d551adb56068a08efdb7e87cecadc0aa0d7",
"0x2844c01ed0fc174d0c7a2286ff2d97b484f0e037d5620b06bade3700b1923edb",
"0xd2d53fa0d6d3c0b33e49c89e9170c4a88fa8381595d8123834888df97f1d2143",
"0x79c2974fb6f3b713851269694bf147fc046ff17be9ff9e6a202473b724403321"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
