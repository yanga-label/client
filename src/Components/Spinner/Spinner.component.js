import React from "react";
import "./Spinner.style.css";

const Spinner = () => {
    return(
        <div className="center">
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Spinner;