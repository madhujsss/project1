
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
      <div className="rest-card" style={{
        justifyContent: "space-between",
        //border: "11px solid black",
        width: "200px",
        height: "400px",
        padding: "5px",
        backgroundColor: "#d3d3d3",
        cursor: "pointer",
        margin: "10px",
        fontFamily: "Basis Grotesque Pro",
      }}>
      <img className="restimg" style={
        {
          width: "100%",
          overflow: "auto",
          height: "50%"
        }
      } src={IMG_URL + cloudinaryImageId} />
      <h3 style={{fontSize: "18px", fontWeight: "300", color: "black"}}>{name}</h3>
      <h3 style={{fontSize: "18px", color: "black"}}>{costForTwo}</h3>
      <h3 style={{fontSize: "16px", color: "black"}}>{locality}</h3>
      <h3 style={{fontSize: "16px", overflow: "hidden", color: "black"}}>{cuisines.join(", ")}</h3>
      <h3 style={{fontSize: "17px", WebkitTextDecorationColor: "green", color: "black"}}>{avgRating}*</h3>
      </div>
    )
  }

  export default RestoCard;