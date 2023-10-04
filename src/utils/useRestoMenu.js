import { FETCH_MENU } from "./constants";
import { useEffect, useState } from "react";
import axios from "axios";

const useRestoMenu = (resId) => {

    const[resInfo, setRestoMenus] = useState(null);

    useEffect(()=> {
        fetchMenu();
 }, []);

 const fetchMenu = async () => {
 try{
        const res = await axios(FETCH_MENU + resId);
        const json = res.data.data;
        console.log(res);
        setRestoMenus(json);
 }
 catch(error){
       console.error(eroor.response);
 }
}
return resInfo;
}

export default useRestoMenu;