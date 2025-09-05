import React from "react";
import Logo from "../images/logo.svg";
const Navbar = () => {
    return (
        <div className="navbar">
            <img src={Logo}></img>
            <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Home</li>
                <li>Product</li>
            </ul>
            <button>Get Started</button>
        </div>
    )
}

export default Navbar;