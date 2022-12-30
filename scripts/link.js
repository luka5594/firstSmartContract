const ethers = require('ethers');
require('dotenv').config();
const ABI = require("../artifacts/contracts/intermediateContract.sol/intermediateContract.json")



async function main() {

  const target = "0x8d35E3054FAf31830cEBD466F8bF835Dc629033b";

  const contractAbi = ABI.abi;
  const provider = new hre.ethers.providers.AlchemyProvider(
         "goerli",
        process.env.GOERLI_URL
  );

  const signer =  await new hre.ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const Winner = await new hre.ethers.Contract(
        target,
        contractAbi,
        signer
        );

  
  await Winner.win;
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});