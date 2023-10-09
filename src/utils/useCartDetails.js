import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const useCartDetails = () => {
 
    const [cartInfo, setCart] = useState(null);
    const [data, setData] = useState(null);

    useEffect(()=> {
       if (!data) {
        fetchCart().then((result) => setData(result));
            }
 }, [data]);

 const fetchCart = async () => {
       
 try{
        const res =  await axios.get('http://localhost:5000/api/Cart');
        const json = res.data;
        setCart(json);
 }
 catch(error){
       console.error(error.response);
 }
}

return cartInfo;
  
}

export default useCartDetails;
