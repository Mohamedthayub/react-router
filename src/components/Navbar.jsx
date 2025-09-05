import React from "react";
import Logo from "../images/logo.svg";
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
            <img src={Logo}></img>
            <ul>
               <Link to={"/"}><li>Home</li></Link> 
               <Link to={"/contact"}><li>Contact</li></Link>
               <Link to={"/about"}><li>About</li></Link> 
               <Link to={"/product"}><li>Product</li></Link>
            </ul>
            <button>Get Started</button>
        </div>
    )
}

export default Navbar;