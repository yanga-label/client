import React from "react";

import "./CustomButton.style.css";

const CustomButton = (props) => {
    return (
        <button className="custom-button">
            {props.children}
        </button>
    )
}

export default CustomButton;