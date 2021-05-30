import React, { useContext } from "react";
import Context from "../../Context/Context";
import Navbar from "../Navbar/Navbar.component";

import HomeImage from "../../Assets/home-image.png";

import "./HomePage.style.css";
import Features from "../Features/Features.component";
import Items from "../Items/Items.component";
import CustomButtonClassic from "../CustomButton/CustomButtonClassic";

const HomePage = () => {
    const { state } = useContext(Context);
    console.log(state);
    console.log(state.items[0].item[0].imageUrl)

    return(
        <div>
            <div className="home-page">
                <Navbar />

                <div className="home-content">
                
                    <div className="home-slogant">
                        <h1 className="slogant-heading">Grace is sufficiant</h1>
                        <p className="slogant-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        </p>

                        <CustomButtonClassic>Explore {" "} &#8594;</CustomButtonClassic>
                    </div>

                    <div className="home-image">
                        <img src={HomeImage} alt="home"/>     
                    </div>

                </div>

                <Features />
            </div>
            <Items quantity={4}/>
            <div className="center">
                <CustomButtonClassic>Explore {" "} &#8594;</CustomButtonClassic>
            </div>
        </div>
        )
}

export default HomePage;