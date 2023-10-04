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
        const res =  await axios.get('http://localhost:5000/api/menuData');
        const json = res.data.data;
        setRestoMenus(json);
 }
 catch(error){
       console.error(error.response);
 }
}
return resInfo;
}

export default useRestoMenu;