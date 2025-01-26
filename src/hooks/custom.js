import {useState,useEffect} from 'react'

function useCurrency(currency){
    let [data,setdata]=useState({});
    useEffect(()=>{
       fetch(`https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency}.json`)
       .then((res)=>{
           return res.json()
       })
       .then((res)=>{
         setdata(res[currency])
       })
       .catch((error) => {
        console.error('Error fetching currency data:', error);
        setdata({}); 
       });
      }, [currency]);

    return data;
}

export default useCurrency;