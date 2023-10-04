import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestoMenu from "../utils/useRestoMenu";

const Restomenu = () => {

    const { resId } = useParams();
    const resInfo = useRestoMenu(resId);
  
if( resInfo === null){
    return(
        <Shimmer />
    );
 };

 const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
 const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return(
        <div className="restomenu" style={{ 
            fontSize: "18px",
            marginLeft: "150px",
            marginTop: "50px",
        fontFamily: "Basis Grotesque Pro",}}>
       <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menus</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
        </div>
    );
}

export default Restomenu;