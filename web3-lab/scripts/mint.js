// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const DatauriParser = require('datauri/parser');
const parser = new DatauriParser();

async function main() {
  const fblabnftAddress = "0xae516f9fa986d4ebb64d836112cD0b675115CD45";
  const signer = await hre.ethers.getSigner()
  const signerAddress = await signer.getAddress()
  const fblabnft = await hre.ethers.getContractAt("FBLabNFT", fblabnftAddress, signer);
  const quantity = "1";
  
  const tx = await fblabnft.mint(signerAddress, quantity);
  await tx.wait()

  console.log("A new FB NFT has been minted to:", signerAddress);
  // console.log("tokenURI:", await fbnyclab.tokenURI(0))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});