require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/H6U8r84MLa_F7KsVLOaNqYY0PNir_LZU",
      accounts: [process.env.PRIVATE_KEY] 
    },
  }
};
console.log(process.env.PRIVATE_KEY)

//process.env.GOERLI_URL,