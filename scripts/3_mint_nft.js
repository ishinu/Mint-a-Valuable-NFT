const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
require('dotenv').config();
const ethers = require('ethers');
const tokenURI = "https://gateway.pinata.cloud/ipfs/QmQuVRsoDLHTVgMFuvGAmjZANktPGcf9Ti4sfTr8Nuzy4y";

const abi = contract.abi;
const contractAddress = '0x4131d593457b8d4Cf0D8f29fb4F1f04e816Df66A';
const provider = new ethers.providers.AlchemyProvider('goerli',`${process.env.ALCHEMY_API_URL}`)
const signer = new ethers.Wallet(`${process.env.PRIVATE_KEY}`,provider)

const myNftContract = new ethers.Contract(contractAddress,abi,signer);

const mintNFT = async() => {
    let nftTxn = await myNftContract.mintNFT(signer.address, tokenURI)
    await nftTxn.wait()
    console.log(`NFT Minted! Check it out at : https:/goerli.etherscan.io/tx/${nftTxn.hash}`)
}

mintNFT();