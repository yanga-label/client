import React, { useContext } from "react";
import Context from "../../Context/Context";
import Feature from "../Feature/Feature.component";

import "./Features.style.css";

const Features = () => {
    
    const { state } = useContext(Context);

    return (
        <>
            {
                state.features.length 
                &&
                <div className="features">
                {   
                    state.features.map((feature, idx) => 
                        <Feature key={idx} id={idx}>
                            <div className="feature--icon">
                                {feature.icon}
                            </div>

                            <div className="feature--content">
                                <h2 className="feature--content-title">
                                    {feature.title}
                                </h2>
                                <span className="feature--content-text">
                                    {feature.text}
                                </span>
                            </div>
                        </Feature>
                    )
                }
                </div>
            }
            
        </>
    )
}

export default Features;
