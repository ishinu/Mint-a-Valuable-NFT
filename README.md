# Mint a Valuable NFT 

Here is your detailed guide of how to mint your own NFT and test it out in public testnet Eg. Goerli.

## Terminal commands to execute this project

- Clone this repository using `git clone https://github.com/ishinu/Mint-a-Valuable-NFT` 
- Run `npm install`
- Add `.env` file and fill it up with your API Keys.
  Ah, ahh.... what's that? What's an API? Where ..how? 

Ok! If you are wondering what to write in `.env` file. Simple check out this [guide](https://github.com/ishinu/Re-Entrancy-Hack-Upgradeable-) and make free accounts as noted and easily get this step done in ~3min.

How it shall look like for this project : 
```
ALCHEMY_API_URL=00000xxx1234
PRIVATE_KEY=00000xxx1234
ETHERSCAN_API_KEY=00000xxx1234
```

( [Alchemy](https://www.alchemy.com/) or [Infura](https://infura.io/), anyone you like. Both are free and both works pretty awesome! This project, we are using Alchemy.) 

## Technical guide how to this NFT comes to life

Step 1 :Here we have `MyNFT.sol` which is a smart contract which imports few more contracts from `OpenZeppelin` named `ERC721URIStorage, Counters and Ownable`.

OpenZeppelin libraries provides world class help in security when it comes to smart contract development.

First we deploy `MyNFT.sol` by running this command in terminal `env $(cat .env) npx hardhat run --network goerli scripts/1_deploy_nft.js` ( make sure you have some test Goerli ETH in your wallet ) if not, get it from [goerliFaucet](https://goerlifaucet.com/)

Once it is delpoyed, you may verify it to see the code in Goerli Etherscan. ( without verification, etherscan won't show you the code.)
To verify, Run this command in terminal with your *deployed contract address* : 
`env $(cat .env) npx hardhat verify --network goerli 0x4131d593457b8d4Cf0D8f29fb4F1f04e816Df66A`

Again if you are wondering, why these commands and where it coming from, i am just taking them from previous repo where i detailed about this process [here](https://github.com/ishinu/Re-Entrancy-Hack-Upgradeable-)

Once your code is verified, you can check your code in Goerli etherscan testnet.

( Here is mine if you may wonder : `https://goerli.etherscan.io/address/0x7a08b09371adb3d04305f629b7d083584c7ee34f` ) 

Step 2 : Now we have to Mint an NFT. ( What we did in step 1 was deployed a smart contract which is having a `mintNFT()` which takes a `tokenURI` as argument )

Now we have to get the `tokenURI` and how to do that. Very simple process. ~3min.

Make an account in `pinata` [pinata.cloud](https://www.pinata.cloud/)

It will take you to dashboard, for test purpose try to upload a `1mb or less` picture to gain momentum since bigger the image, more time it will take to ultimately load in metamask.

After you upload this picture, in this folder you may find a `nft-metadata.json`. 

Yes, you might have seen Opensea or other nft marketplace where nft's have a certain characteristics. Here in `nft-metadata.json`, we specify the characteristics and also the `image` url which we will get from pinata. ( For example, i have left mine in this project so you don't get confused but do remember to replace with yours )

Then, you have to upload this `nft-metadata.json` file to pinata and get it's url that's `tokenURI` for you. 

How it looks like, you shall move to `2_mint_nft.js` file in this project and everything will looks pretty easy now.

If this line `const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");` seems confusing to you :
i) once you have made your .env file, you can run `npx hardhat compile` in your terminal and you may see `artifacts` and `cache` folder popup in your project root directory. Above line is specifying the path to `MyNFT.json` file. 

You shall replace the contract address in `2_mint_nft.js` from mine to yours. 

That's pretty much it! You may run this command in terminal : `env $(cat .env) npx hardhat run --network goerli scripts/2_mint_nft.js`

That's your first NFT! *Congratulations!*

Step 4 : To view in your metamask wallet, go to `Import NFT` which will be available just on right tab of assets.

First : Enter your contract address, the one we delpoyed in the beginning. 
Second : Enter ID which if you deployed first time, it must be `1` and Enter.

It may take ~minutes depending on your image size which you uploaded in `pinata.cloud` but it will appear very soon! 

Now it's yours, play with it and make valuable NFT's which brings the change for good!





