import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const useRestoMenu = () => {

    const[resInfo, setRestoMenus] = useState(null);
    const [data, setData] = useState(null);

    useEffect(()=> {
       if (!data) {
              fetchMenu().then((result) => setData(result));
            }
 }, [data]);

 const fetchMenu = async () => {
       
 try{
       const menuUrl = `https://run.mocky.io/v3/08d67b2b-9184-439d-8add-620b003a4b4c`;
    const response = await axios.get(menuUrl, {
      headers: {
        'Content-Type': 'application/json', 
      },
    });
        const json = response.data.data;
        setRestoMenus(json);
 }
 catch(error){
       console.error(error.response);
 }
}
return resInfo;
}

export default useRestoMenu;