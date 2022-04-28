import logo from './logo.svg';
import './App.css';
import {BigNumber, ethers} from "ethers"
import { useEffect, useState } from 'react';
import abi from './abi.json'

const PUBLIC_KEY="0x0492E0DA1de879fc6553548d6D05c4192a64646F"

function App() {
  const [val, setVal] = useState()
  useEffect(()=>{

    /*const provider= new ethers.providers.Web3Provider(window.ethereum)

    //console.log("we have a provider")
    
    console.log("provider: ",provider)

    const accounts=askPermission(provider)


    const signer = provider.getSigner()

    //console.log("signer: ",signer)

    const user=getAddress(signer)

    console.log("user: ",user)

    getBalance(provider,user)
    */
    //console.log("i have this much moneiz: ",getBalance(provider,user))

  },[])


  const askPermission=async (provider)=>{
   return await provider.send("eth_requestAccounts", []);
  }

  const getAddress=async(signer)=>{
    return await signer.getAddress()
  }

  /*const getBalance=async (provider,user)=>{
    const balance=await provider.getBalance(user)
    console.log("moo: ",ethers.utils.formatEther(balance))
  }*/

  const buyToken = async ()=>{
    const provider= new ethers.providers.Web3Provider(window.ethereum)

    //console.log("we have a provider")
    
    console.log("provider: ",provider)

    const accounts=askPermission(provider)

    const signer = provider.getSigner()

    //console.log("signer: ",signer)

    const user= await getAddress(signer)

    console.log("user: ",user)

    const contractAddress="0x31E554eCCcb41cbe4f7a59A909A8ccDACcDC72E4"

    const myContract=new ethers.Contract(contractAddress,abi,signer)
    console.log(myContract)
    await myContract.buyToken({value:"10"})

    //console.log("balance: ",await myContract.myBalance())
    
  }

  return (
    <div className="App">
      <input value={val} onChange={e => setVal(e.target.value)} />
      <button title='buy' onClick={buyToken}>buy</button>
    </div>
  );
}

export default App;
