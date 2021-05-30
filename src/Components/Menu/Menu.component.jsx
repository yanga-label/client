import React, { useContext } from "react";
import Context from "../../Context/Context";
import { TOGGLE_MENU } from "../../Redux/Types";
import "./Menu.style.css";

const Menu = () => {
    const { state, dispatch } = useContext(Context);
    const isMenuOpen = state.isMenuOpen;
    return(
        <div className="menu">
            <i className="fas fa-times fa-3x"
                onClick={() => dispatch({type: TOGGLE_MENU, payload: false})}></i>
            <ul className="nav-list">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">Shop</li>
                    <li className="nav-item">About</li>
                    <li className="nav-item">Contact</li>
            </ul> 
        </div>
    )
}

export default Menu;