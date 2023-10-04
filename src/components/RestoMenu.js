import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestoMenu from "../utils/useRestoMenu";
import { useCallback, useEffect, useMemo } from "react";

const Restomenu = () => { 
    const resInfo = useCallback(useRestoMenu());
   
if( resInfo === null){
    return(
        <Shimmer />
    );
 };

 const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
 const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);
  const categories =
    itemCards?.filter(
      (c) =>
        c.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    
    return(
        <div className="text-lg text-black ml-20 mt-10" >
          <div className=" bg-gray-100 shadow-lg mr-20">
       <h1 >{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      </div>
      <h2>Menus</h2>
      <ul >
        {itemCards.map((item) => (
          <li className="m-4" key={item.card.info.id}>
            {item.card.info.name} - 
            <li>
            {" Rs."}{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          </li>
        ))}
      </ul>
        </div>
    );
}

export default Restomenu;