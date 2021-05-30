import React, { useContext } from "react";
import Context from "../../Context/Context";
import Category from "../Categorie/Categori.component";
import { CollectionsOverviewContainer } from './Items.style';

import "./Items.styles.css";

const Items = ({quantity, preview}) => {
    const { state } = useContext(Context);
    let items;
    if (preview){
        items = state.preview
    } else {
        items = state.items
    }
    return(
  <CollectionsOverviewContainer>
        <div className="center-only">
            <h2>ITEMS</h2>
        </div>
    {items.map((category, idx) => {
        return(
            <Category key={idx} category={category} quantity={quantity}/>
    )})}
  </CollectionsOverviewContainer>
    )
};

export default Items;