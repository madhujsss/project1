 import RestoCard from "./RestoCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {FETCH_RESTO} from "../utils/constants"
import useOnlineStatus from "../utils/useOnlineStatus";
import axios from "axios";

const Body = () => {

    let[listOfRestorant, setListOfRestorant] = useState([]);
    const[filteredResto, setOfFilteredResto] = useState([]);

    const[searchText, setSearchText] = useState("");

    useEffect(() => {       
             fetchData();
    }, []);

    const fetchData = async () => {
      try{
        const res = await axios(FETCH_RESTO);
        const json = res.data;
        console.log(res);
        setListOfRestorant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setOfFilteredResto(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 }
 catch(error){
       console.error(eroor.response);
 }
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus== false){return <h3>your internet is turned off, please trun it on</h3>};


    if (listOfRestorant.length === null){
        return(
        <Shimmer />
        );
    }

    return ( listOfRestorant.length === 0 ? (
        <Shimmer />
      ) : 
   (<div className="body" style={{backgroundColor: "#e0ffff",}}> 
   <div className="filters" style={{
    paddingTop: "1.6rem",
    paddingBottom: "1.6rem",
    display: "flex",
    border: "1px solid",
    
    }}>
    <div style={{margin: "10px 20px", marginLeft:"50px"}}>
        <input type="text" className="search" value={searchText} 
        onChange={(e) => {setSearchText(e.target.value)}}/>
        <button onClick={() => {
             const filteredResto = listOfRestorant.filter((res) =>
             res.info.name.toLowerCase().includes(searchText.toLowerCase())
           );
           setOfFilteredResto(filteredResto);
        }}>Search</button>
    </div>
    <div className="filter tab" >
        <button style={{margin: "10px 20px", backgroundColor: "#90ee90"}} onClick={ () =>{
          const filteredResto = listOfRestorant.filter(res => 
            res.info.avgRating > 4);
            setOfFilteredResto(filteredResto);
        }}> 
            Top rated restaurant
        </button>
    </div>
    </div>
    <div className="resto-container" style={{
      display: "flex",
      flexWrap: "wrap"
    }}>
      { filteredResto.map((restaurant) => (
        <Link style={{textDecoration: 'none', opacity:"1", }} key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
        <RestoCard  restdata={restaurant} />
        </Link>
))}
    </div>
   </div>
  ))}

  export default Body;