import React from "react";
import Navbar from "../Navbar/Navbar.component";
import "./Contact.style.css";

const Contact = () => {
    return(
        <div>
        <div className="default-padding">
            <Navbar />
        </div>
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                        <h2 className="heading-section">Contact Form</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-md-12">
                        <div className="wrapper">
                            <div className="row no-gutters">
                                <div className="col-md-7 d-flex align-items-stretch">
                                    <div className="contact-wrap w-100 p-md-5 p-4">
                                        <h3 className="mb-4">Contactez nous</h3>
                                        <div id="form-message-warning" className="mb-4 text-danger"></div> 
                                <div id="form-message-success" className="mb-4 text-success">
                                Votre message a ete envoye, Merci!
                                </div>
                                        <form method="POST" id="contactForm" name="contactForm">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6"> 
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea name="message" className="form-control" id="message" cols="30" rows="7" placeholder="Message"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea name="comment" className="form-control" id="comment" cols="30" rows="7" placeholder="Commentaire"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="submit" value="Send Message" className="btn btn-primary" />
                                                        <div className="submitting"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-5 d-flex align-items-stretch">
                                    <div className="info-wrap bg-primary w-100 p-lg-5 p-4">
                                        <h3 className="mb-4 mt-md-4">Contact us</h3>
                                <div className="dbox w-100 d-flex align-items-start">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-map-marker"></span>
                                    </div>
                                    <div className="text pl-3">
                                    <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                                </div>
                            </div>
                                <div className="dbox w-100 d-flex align-items-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-phone"></span>
                                    </div>
                                    <div className="text pl-3">
                                    <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                                </div>
                            </div>
                                <div className="dbox w-100 d-flex align-items-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-paper-plane"></span>
                                    </div>
                                    <div className="text pl-3">
                                    <p><span>Email:</span> <a href="mailto:info@yoursite.com">labelyanga@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Contact;