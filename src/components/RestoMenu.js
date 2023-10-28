import Shimmer from "./Shimmer";
import useRestoMenu from "../utils/useRestoMenu";
import { useCallback, useEffect, useMemo, useState } from "react";
import { IMG_URL } from "../utils/constants";
import { IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";


const Restomenu = () => { 
    const resInfo = useCallback(useRestoMenu());

    const [showIndex, setShowIndex] = useState(null);
    const dummy = "Dummy Data";
   
if( resInfo === null){
    return(
        <Shimmer />
    );
 };

 const { name, cuisines, costForTwoMessage, avgRating, areaName, city, totalRatingsString,description,imageId,rating} = resInfo?.cards[0]?.card?.card?.info;
 const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  
    const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
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
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
        </div>
    );
}

export default Restomenu;