const ethers = require('ethers');
require('dotenv').config();
const hre = require("hardhat");


async function main() {
  const intermediateContract =  await hre.ethers.getContractFactory("intermediateContract");
  const winner = await intermediateContract.deploy("0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502");

  await winner.deployed()
console.log("The winner contract is:", winner.address)

} 

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});