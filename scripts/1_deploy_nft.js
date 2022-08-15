async function main(){
    const MyNFT = await ethers.getContractFactory("MyNFT");
    const mynft = await MyNFT.deploy();
    console.log("Contract deployed at address : ",mynft.address);
}

main();