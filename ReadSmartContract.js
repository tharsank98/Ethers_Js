const {ethers}= require("ethers"); 
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/5e1f3d22968442749797ceff11c6208c`);

const WalletAddress ="0xAb57E0EB738Ed00E721b24Cc744E60c11BfaFD1b";
const WalletAbi= [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sendEthContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

   const contractRead = async() =>{
    const walletContract = new ethers.Contract(
        WalletAddress,
        WalletAbi,
        provider
    )
    //console.log(walletContract);

    const contractName= await walletContract.name();
    console.log(contractName);

    // const contractNum= await walletContract.getValue();
    // console.log(contractNum.toString());

    //Contract balance in ether
    // const contractBalance = await walletContract.contractBalance();
    // const balanceEther = ethers.utils.formatEther(contractBalance);
    // console.log("contract balance:",balanceEther);

    //Read another account balance 
    const userBalance= await walletContract.accountBalance("0x441adcA404f988db66B8C52c194CBcaD441D2970");
    const userBalanceEther = ethers.utils.formatEther(userBalance);
    console.log(userBalanceEther);

}
    contractRead();