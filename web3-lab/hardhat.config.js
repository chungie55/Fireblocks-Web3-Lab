/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require("@fireblocks/hardhat-fireblocks");

const FIREBLOCKS_API_PRIVATE_KEY_PATH = "./roadshow_api.key";
const FIREBLOCKS_API_KEY = "4e61af6e-c568-35b6-5a81-db34257f2ec8";
const FIREBLOCKS_VAULT_ACCOUNT_IDS = "0";     // Controller Vault

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://rpc.ankr.com/eth_goerli",
      fireblocks: {
        privateKey: FIREBLOCKS_API_PRIVATE_KEY_PATH,
        apiKey: FIREBLOCKS_API_KEY,
        vaultAccountIds: FIREBLOCKS_VAULT_ACCOUNT_IDS,
     }
    }
  }
};