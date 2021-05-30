import React from "react";
import "./Feature.style.css";

const Feature = (props) => {
    return(
        <div className={`feature feature-${props.id}`}>
            {props.children}
        </div>
    )
}

export default Feature;