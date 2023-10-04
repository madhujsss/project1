import { useState } from "react";
import { IMG_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

    const[btnNameReact, setBtnNameReact] = useState(["Login"])

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
       <li className="px-4">
        <button className="login" 
        onClick={() => {
            btnNameReact == "Login" ? setBtnNameReact("Logout"): setBtnNameReact("Login")
        }}>
            {btnNameReact}
            </button>
       </li>
       </ul>
       </div>
      </div>
    )
}

export default Header;