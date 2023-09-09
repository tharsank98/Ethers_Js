const {ethers}= require("ethers"); 

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/5e1f3d22968442749797ceff11c6208c`)

//console.log(provider);

const querryBlockchain = async() =>{
    // const block = await provider.getBlockNumber();
    // console.log(block);

    //The balance in BigNumber
    const balance = await provider.getBalance("0xCBDFFA4C9B69FA4e575bB3A786aAf8D6b11B86a1");
    console.log("Account Balance in BN:",balance);
    console.log("Account Balance in BN:",balance.toString());

    //The balance in Ether
    const balanceEther = ethers.utils.formatEther(balance);
    console.log("Account Balance in Ethers :", balanceEther);

     //The balance in wei
     const balanceWei = ethers.utils.parseEther(balanceEther);
     console.log("Account Balance in Ethers :", balanceWei.toString());
}
querryBlockchain();
