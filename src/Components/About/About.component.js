import React from "react";
import Navbar from "../Navbar/Navbar.component";
import "./About.style.css";

const About = () => {
    return(
        <div id="home" className="about">
            <Navbar />

            <div className="center">
                <h2>About us</h2>
            </div>

            <div className="about-content">
                <div className="about-content-text">
                    <p>
                    Yanga means in Lingala the Congolese language: Mine
                    And in Hausa Nigerian language: Style.
                    And, it's a 
                    Sustainable Fashion Brand using African Textiles
                    Run by two young african entrepreneurs 
                    </p>
                    <p>
                    one of the objectives of the brand beyond the fact that it 
                    produces several African accessories mixed with several cultures, 
                    is to tell a story, to extend the culture, to establish a 
                    mixing of culture in order to respond to the humanitarian need.
                    </p>
                </div>
                <div className="about-image">
                    <img src="https://i.ibb.co/N6ZLvBp/IMG-20210530-WA0110-2-removebg-preview.png" alt="IMG-20210530-WA0110-2-removebg-preview" border="0"></img>
                </div>
            </div>
        </div>
    )
}

export default About;