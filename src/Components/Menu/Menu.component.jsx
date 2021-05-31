import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../Context/Context";
import { TOGGLE_MENU } from "../../Redux/Types";
import "./Menu.style.css";

const Menu = () => {
    const history = useHistory();
    const { dispatch } = useContext(Context);

    const HandlePageChane = (place) => {
        dispatch({type: TOGGLE_MENU, payload: false})
        history.push(place);
    }

    return(
        <div className="menu">
            <i className="fas fa-times fa-3x"
                onClick={() => dispatch({type: TOGGLE_MENU, payload: false})}></i>
            <ul className="nav-list">
                    <li className="nav-item" onClick={() => HandlePageChane("/")}>Home</li>
                    <li className="nav-item" onClick={() => HandlePageChane("/shop")}>Shop</li>
                    <li className="nav-item" onClick={() => HandlePageChane("/about")}>About</li>
                    <li className="nav-item" onClick={() => HandlePageChane("/contact")}>Contact</li>
            </ul> 
        </div>
    )
}

export default Menu;