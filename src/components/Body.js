 import RestoCard from "./RestoCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import axios from "axios";

const Body = () => {

    let[listOfRestorant, setListOfRestorant] = useState([]);
    const[filteredResto, setOfFilteredResto] = useState([]);

    const[searchText, setSearchText] = useState("");
    const [data, setData] = useState(null);

    useEffect( () => {     
      if (!data) {
        fetchData().then((result) => setData(result));
      }
}, [data]);

    const fetchData = async () => {
      try{
        const add = await axios.get('http://localhost:5000/api/restoData');
        const json = add.data;
        setListOfRestorant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setOfFilteredResto(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 }
 catch(error){
       console.error(error.response);
 }
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus== false){return <h3>your internet is turned off, please trun it on</h3>};


    return ( listOfRestorant.length === null ? (
        <Shimmer />
      ) : 
   (<div className="body" > 
   <div className="filters flex flex-col md:flex-row  m-4 p-4"  >
    <div >
        <input type="text" className="border border-solid border-black" value={searchText} 
        onChange={(e) => {setSearchText(e.target.value)}}/>
        <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
             const filteredResto = listOfRestorant.filter((res) =>
             res.info.name.toLowerCase().includes(searchText.toLowerCase())
           );
           setOfFilteredResto(filteredResto);
          
        }}>Search</button>
    </div>
    <div className="search  p-4 flex items-center" >
        <button className="px-4 py-2 bg-gray-100 rounded-lg"  onClick={ () =>{
          const filteredResto = listOfRestorant.filter(res => 
            res.info.avgRating > 4);
            setOfFilteredResto(filteredResto);

        }}> 
            Top rated restaurant
        </button>
    </div>
    </div>
    <div className="flex flex-wrap" >
      { filteredResto.map((restaurant) => (
        <Link style={{textDecoration: 'none', opacity:"1", }} key={restaurant.info.id} to={"/restaurant/"}>
        <RestoCard  restdata={restaurant} />
        </Link>
))}
    </div>
   </div>
  ))}

  export default Body;