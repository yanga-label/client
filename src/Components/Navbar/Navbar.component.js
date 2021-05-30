import React, { useContext } from "react";
import Context from "../../Context/Context";
import Logo from "../../Assets/logo-croped.png";
import Menu from "../Menu/Menu.component";
import { TOGGLE_MENU } from "../../Redux/Types";
import "./Navbar.style.css";

const Navbar = () => {
    const { state, dispatch } = useContext(Context);
    const isMenuOpen = state.isMenuOpen;

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
                    onClick={() => dispatch({type: TOGGLE_MENU, payload: !isMenuOpen })}
                ></i>
            </div>
        {   isMenuOpen && <Menu />}
        </nav>
        )
}

export default Navbar;