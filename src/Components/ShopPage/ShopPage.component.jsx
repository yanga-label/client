import React from "react";
import Items from "../Items/Items.component";
import Navbar from "../Navbar/Navbar.component";
import "./ShopPage.style.css";

const ShopPage = () => {
    return(
        <div className="shop">
            <div className="padding-default">
                <Navbar />
            </div>
            <Items quantity={2}/>
        </div>

    )
}

export default ShopPage;