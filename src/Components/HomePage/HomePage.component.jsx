import React from "react";
import Navbar from "../Navbar/Navbar.component";

// import HomeImage from "../../Assets/home-image.png";

import "./HomePage.style.css";
import Features from "../Features/Features.component";
import Items from "../Items/Items.component";
import CustomButtonClassic from "../CustomButton/CustomButtonClassic";

const HomePage = () => {
    return(
        <div>
            <div className="home-page">
                <Navbar />

                <div className="home-content">
                
                    <div className="home-slogant">
                        <h1 className="slogant-heading">Grace is sufficiant</h1>
                        <p className="slogant-text">
                        Beyond the fact that we produces several African 
                        accessories mixed with several cultures, Our objectives is to tell a story, 
                        to extend the culture, to establish a mixing of culture in order 
                        to respond to the humanitarian need. 
                        </p>

                        <CustomButtonClassic>Explore {" "} &#8594;</CustomButtonClassic>
                    </div>

                    <div className="home-image">
                        <img src="https://i.ibb.co/LJ5QKrM/IMG-20210530-WA0113-removebg-preview.png" alt="home"/>     
                    </div>

                </div>

                <Features />
            </div>
            <Items quantity={10} preview/>
            <div className="center">
                <CustomButtonClassic>Explore {" "} &#8594;</CustomButtonClassic>
            </div>
        </div>
        )
}

export default HomePage;