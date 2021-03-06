import React from "react";
import Logo from "../../Assets/logo-normal.png";
import "./Footer.style.css";

const Footer = () => {
    return(
        <footer className="footer">

            <div className="footer-link">
                <a href="#home">Yanga Label</a>
            </div>
            <div className="footer-logo">
                <img src={Logo} alt="footer logo" />
            </div>
            <div className="footer-content">
                <i className="fab fa-facebook-f fa-2x"></i>
                <i className="fab fa-instagram fa-2x"></i>
                <i className="fab fa-twitter fa-2x"></i>
                <i className="fab fa-whatsapp fa-2x"></i>
            </div>
        </footer>
    )
}   

export default Footer;
