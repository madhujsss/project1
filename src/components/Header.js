import { useState } from "react";
import { IMG_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

    const[btnNameReact, setBtnNameReact] = useState(["Login"])

    return(
      <div className="header" style={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid",
        backgroundColor: "#48d1cc",
        position: "sticky",
        height: "140px",
        top: "0"
      }}> 
      <div className="image-container">
      <img className="logo" style={{width: "150px"}} src= {IMG_LOGO} />
      </div>
      <div className="nav-items" >
        <ul className="items" style={{
          display: "flex",
          listStyleType: "none",
          padding: "20px 20px",
          fontSize: "20px",
         textAlign: "center",
          }}>
       <li style={{
        width: "100px",
        height: "100px",
        textAlign: "center",
        justifyContent: "center",
       }}>
        <Link style={{textDecoration: "none", color: "#000000"}} to= "/">Home</Link>
       </li>
       <li style={{
        width: "100px",
        height: "100px",
        textDecoration: "none",
       }}>
        <Link style={{textDecoration: "none", color: "#000000"}} to= "/about">About Us</Link>
        </li>
       <li style={{
        width: "100px",
        height: "100px"
       }}>
        <Link style={{textDecoration: "none", color: "#000000"}} to="/contact">Contact</Link>
        </li>
       <li style={{
        width: "100px",
        height: "100px"
       }}>
        <button className="login" style={{
            width: "75px",
            height: "50px",
            color: "#000000",
        }} 
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