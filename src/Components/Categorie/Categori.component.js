import React from "react";
import Item from "../Item/Item.component";

import "./Categori.style.css";

const Category = ({category, quantity}) => {
    return(
        <div>
        <h2 className="category--title">{category.name.toUpperCase()}</h2>
            <div className="category">
            {
                category.item.map((item, idx) => {
                    if (idx <= quantity){
                        return(
                        <Item key={idx} item={item}/>
                        )
                    } else {
                        return (
                        null
                    )}
                })
            }
            </div>
        </div>
    )
}

export default Category;