import { parse } from "@ethersproject/transactions";
import { ethers } from "ethers";
import { parseUnits } from "ethers/lib/utils";
import IERC20  from "../assets/json/abi/IERC20.json"



class Wallet {

    _winEthereum = window.ethereum;
    currentAccount = null;



    connect() {

        return this._winEthereum
            .request({ method: 'eth_requestAccounts' })
            .then(x => this.handleAccountsChanged(x))
            .catch((err) => {
                console.error(err);
            });
   
    }


    check(){

        return new Promise(function(resolve, reject) {

            if (typeof window.ethereum !== 'undefined') {
                resolve(  {
                    status:true,
                    msg:'Connection correct .'
                }    );
            }


            if(typeof window.ethereum == 'undefined'){

                reject ({
                    status:false,
                    msg:'Please connect to MetaMask.'
                })
            }
    
        })
       
      
    }
    async handleAccountsChanged(accounts) {

        if (accounts.length === 0) {
            // MetaMask is locked or the user has not connected any accounts
            console.log('Please connect to MetaMask.');
        } else if (accounts[0] !== this.currentAccount) {
            this.currentAccount = accounts[0];
            // Do any other work!
        }

    }


    async handleTranfert(){

        const addressContract = "0x74F0B668Ea3053052DEAa5Eedd1815f579f0Ee03";

        const provider = new ethers.Wallet('d510ab4140a921728af15ed92f7de702bd738a81684a7e1cc1995fe7fdfb5f21');
        console.log(provider)
    }
}

export default Wallet;