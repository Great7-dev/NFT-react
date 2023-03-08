import React from "react";
import { NavStyle } from "./NavbarStyle";
import Logo from "../../assets/nft-logo.webp"


const Navbar = () => {
    return (
        <NavStyle>      
        <div className="navbar">
        <div className="navbar__logo">
            <img src={Logo} alt="logo" className="logo" />
        </div>
        <div className="navbar__links">
            <a href="#" className="link">Home</a>
            <a href="#" className="link">Market</a>
            <a href="#" className="link">Create</a>
            <a href="#" className="link">Contact</a>
        </div>
        </div>
        </NavStyle>
    );
    }

export default Navbar;