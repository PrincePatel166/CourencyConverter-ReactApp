import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import useCurrency from './hooks/custom'
import InputBox from "./InputBox";
import './App.css'

function App() {
  let [amount,setamount]=useState(0);
  let [convamount,setconvamount]=useState(0);
  let [from,setfrom]=useState("usd");
  let [to,setto]=useState("inr");

  let currencyinfo=useCurrency(from);
  let options=Object.keys(currencyinfo);

  const swap=()=>{
    setfrom(to);
    setto(from);
    setamount(convamount);
    setconvamount(amount);
  }
  let convert=()=>{
    setconvamount(amount*currencyinfo[to]);
  }
  return (
    <div
    className="w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
        backgroundImage: `url('https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
    }}
>
    <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    convert()
                   
                }}
            >
                <div className="w-full mb-1">
                    <InputBox
                        label="From"
                        amount={amount}
                        currencyoptions={options}
                        oncurrencychange={(currency) => setfrom(currency)}
                        selectcurrency={from}
                        onamountchange={(amount) => setamount(amount)}
                    />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-black text-white px-2 py-0.5"
                        onClick={swap}
                        style={{backgroundColor:'blue'}}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                    <InputBox
                        label="To"
                        amount={convamount}
                        currencyoptions={options}
                        oncurrencychange={(currency) => setto(currency)}
                        selectcurrency={to}

                        // amountDisable
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" style={{backgroundColor:'blue'}}>
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
            </form>
        </div>
    </div>
</div>
  )
}

export default App
