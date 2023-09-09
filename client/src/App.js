
import "./App.css";
import { useEffect } from "react";
const { ethers } = require("ethers");
function App() {
  const walletAddress = "0xAb57E0EB738Ed00E721b24Cc744E60c11BfaFD1b"; //contract wallet

  useEffect(() => {
    const walletAbi =  [
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
    const writeContract = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(walletAddress, walletAbi, signer);

       //await contract.setValue(100);
      //await contract.sendEthContract({ value: ethers.utils.parseEther("0.00001") });

      await contract.sendEthUser("0x441adcA404f988db66B8C52c194CBcaD441D2970",{ value: ethers.utils.parseEther("0.0001")});


    };
    writeContract();
  }, []);
  return <div className="App"></div>;
}

export default App;
