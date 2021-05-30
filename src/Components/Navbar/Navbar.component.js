import React, { useState } from "react";
import Logo from "../../Assets/logo-croped.png";

import "./Navbar.style.css";

const Navbar = () => {
    const [isNavbarActive, setNavbarActive] = useState(false);

    return(
        <nav className="nav">
            <div className="logo">
                <div className="logo--image-box">
                    <img className="logo--image" src={Logo} alt="logo" />
                </div>
                <div className="logo--title">
                    <span className="logo--title__yanga">Yanga</span>
                    <span className="logo--title__label">Label</span>
                </div>
            </div>
            <div className="logo-button">
                <i 
                    className="fas fa-bars fa-3x logo-button-icon"
                    onClick={() => setNavbarActive(!isNavbarActive)}
                ></i>
            </div>
        {   isNavbarActive && <ul className="nav-list">
                <li className="nav-item">Home</li>
                <li className="nav-item">Shop</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Contact</li>
            </ul> }
        </nav>
        )
}

export default Navbar;