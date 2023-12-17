import { useState, useContext } from "react";
import { IMG_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const[btnNameReact, setBtnNameReact] = useState(["Login"]);

    const { loggedInUser } = useContext(UserContext);
    console.log(loggedInUser);

    const cartItems = useSelector((store) => store.cart.items);
    
    return(
      <div className="header flex flex-col md:flex-row flex justify-between  lg:shadow-lg  lg:bg-green-50 sm:bg-yellow-50" > 
      <div className="image-container flex justify-between  md:justify-center sm:justify-center" >
      <img className="logo md:w-20 lg:w-50 sm:w-20 ml-10" src= {IMG_LOGO} />
      </div>
      <div className="nav-items flex items-center" >
        <ul className="flex p-4 m-4" >
       <li className="px-4 text-xl sm:text-2xl lg:text-2xl">
        <Link  to= "/">Home</Link>
       </li>
       <li className="px-4 text-xl sm:text-2xl lg:text-2xl">
        <Link  to= "/about">About Us</Link>
        </li>
       <li className="px-4 text-xl sm:text-2xl lg:text-2xl">
        <Link  to="/contact">Contact</Link>
        </li>
          <li className="px-4 font-bold text-xl sm:text-2xl lg:text-2xl">
            <Link key={cartItems.key} to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          {/* key={cartItems.card.info.id} */}
      
          <li className="px-4 ">{loggedInUser}</li>
       </ul>
       </div>
      </div>
    )
}

export default Header;