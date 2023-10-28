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
      <div className="header flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50" > 
      <div className="image-container flex " >
      <img className="logo w-50" src= {IMG_LOGO} />
      </div>
      <div className="nav-items flex items-center" >
        <ul className="flex p-4 m-4" >
       <li className="px-4">
        <Link  to= "/">Home</Link>
       </li>
       <li className="px-4">
        <Link  to= "/about">About Us</Link>
        </li>
       <li className="px-4">
        <Link  to="/contact">Contact</Link>
        </li>
          <li className="px-4 font-bold text-xl">
            <Link key={cartItems.key} to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          {/* key={cartItems.card.info.id} */}
        <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>

          <li className="px-4 ">{loggedInUser}</li>
       </ul>
       </div>
      </div>
    )
}

export default Header;