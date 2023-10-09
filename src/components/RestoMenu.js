import Shimmer from "./Shimmer";
import useRestoMenu from "../utils/useRestoMenu";
import { useCallback, useEffect, useMemo } from "react";
import { IMG_URL } from "../utils/constants";
import { IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const Restomenu = () => { 
    const resInfo = useCallback(useRestoMenu());
   
if( resInfo === null){
    return(
        <Shimmer />
    );
 };

 const { name, cuisines, costForTwoMessage, avgRating, areaName, city, totalRatingsString,description,imageId,rating} = resInfo?.cards[0]?.card?.card?.info;
 const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log("item cards" +itemCards);
  const categories =
    itemCards?.filter(
      (c) =>
        c.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    
    return(
        <div className="text-black mt-10 mx-80" >
          <div className=" bg-gray-100 flex justify-between">
       <div>
       <h1 className="ml-6 text-2xl">{name}-</h1>
      <p className="ml-6 text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <p className="ml-6 text-lg">
       {city}-{areaName}
      </p>
       </div>
       <div className="mr-6 text-lg text-green-600 text-lg">
        {avgRating} *
        <div>
        {totalRatingsString}
        </div>
       </div>

      </div>
      <h2 className="bg-pink-100 mt-10 text-xl">
        <div className="ml-6">Menus</div>
      </h2>
      <ul className="justify-between">
        {itemCards.map((item) => (
          <li className="my-4 bg-gray-100 rounded-md mx-6" key={item.card.info.id}>
            <div className="flex justify-between mr-2">
            <div className="ml-6">
              <li className="text-base">{item.card.info.itemAttribute.vegClassifier=="VEG"?"VEG": "NONVEG"}</li>
            <li className="text-xl"> {item.card.info.name} </li>
            <li className="text-sm mr-10">
            {item.card.info.description}
            </li>
            <li className="text-xl text-slate-800">
            {" Rs."}{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
            </div>
            <div className="mt-2 mr-2">
            <li className="h-20 w-20">
            <img className="rounded-lg bg-top" src={IMG_URL + item.card.info.imageId} />
            </li>
            <li>
              <Link style={{textDecoration: 'none', opacity:"1", }} to={"/restaurant/next"}>
              <button className="ml-2 mt-2 h-8 w-15 text-sm rounded-md border border-transparent bg-indigo-600 px-3 py-1 text-base font-medium text-white hover:bg-indigo-700">ADD</button>
              </Link>
            </li>
            </div>
            </div>
          </li>
        ))}
      </ul>
        </div>
    );
}

export default Restomenu;