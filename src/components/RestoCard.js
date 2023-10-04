
import { IMG_URL } from "../utils/constants";
const RestoCard = (props) => {
    const { restdata } = props;
  
    console.log(restdata);
  
    const {
      cloudinaryImageId, 
      name, 
      costForTwo, 
      locality, 
      avgRating, 
      cuisines} = restdata?.info;
    return(
      <div className="rest-card m-2 p-2 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
        <div className="rounded-lg bg-top overflow-y-clip	fit-content-clip">
      <img className="h-60 w-60" src={IMG_URL + cloudinaryImageId} /></div>
      <div>
      <h3 className="font-bold text-lg text-black">{name}</h3>
      <h3 className="text-lg text-black">{costForTwo}</h3>
      <h3 className="text-lg text-black">{locality}</h3>
      <h3 className="text-lg text-black">{cuisines.join(", ")}</h3>
      <h3 className="font-bold text-lg text-black">{avgRating}*</h3></div>
      </div>
    )
  }

  export default RestoCard;