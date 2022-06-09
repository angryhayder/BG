import { ethers } from "ethers";
import React,{useState} from "react";

const wallet = () => {
  const [errorMessage,setErrorMessage] = useState(null);
        const [userAccount, setDefaultAccount] = useState(null);
        const [userBalance, setUserBalance] = useState(null);
        const [connButtonText, setConnButtonText] =useState('Connect Wallet');
    
        const connectWalletHandler = () => {
            if (window.ethereum) {
                window.ethereum.request({method: 'eth_requestAccounts'})
                .then(result => {
                    accountChangedHandler(result[0]);
                    setConnButtonText('Wallet Connected');
    
                })
            }else{
                setErrorMessage('install MetaMask');
            }
        }
        const accountChangedHandler = (newAccount) => {
            setDefaultAccount(newAccount);
            getUserBalance(newAccount.toString());
        }
        const getUserBalance = (address) => {
            window.ethereum.request({method: "eth_getBalance", params: [address, 'latest']})
            .then(balance => {
                setUserBalance(ethers.utils.formatEther(balance));
            })
        }
    
        window.ethereum.on('accountsChanged', accountChangedHandler);
  return (
    <div></div>
  )
}

export default wallet