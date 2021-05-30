import React, { useContext } from "react";
import Context from "../../Context/Context";
import Category from "../Categorie/Categori.component";
import { CollectionsOverviewContainer } from './Items.style';

import "./Items.styles.css";

const Items = ({quantity}) => {
    const { state } = useContext(Context);
    return(
  <CollectionsOverviewContainer>
    {state.items.map((category, idx) => {
        return(
            <Category key={idx} category={category} quantity={quantity}/>
    )})}
  </CollectionsOverviewContainer>
    )
};

export default Items;