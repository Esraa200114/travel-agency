import React from "react";

// Imports For Icons
import { BiRightArrow } from "react-icons/bi";

// Imports For Styling
import "./PageInspiration.css";

const LandingPageInspiration = () => {
    return (
        <section>
            <div className="inspiration-section container-fluid mb-5">
                <div className="inspiration-section-overlay d-flex align-items-center">
                    <div className="container d-flex flex-column justify-content-between">
                        {/* Top Left Text */}
                        <div className="inspiration-section-top-left-text">
                            <p className="heading fw-bold mb-2">Get Inspirations For Your Next Trip</p>
                            <p className="sub-heading fw-bold fs-5">Read About Wonderful Adventure We Love Most</p>
                        </div>
                        {/* Bottom Right Text */}
                        <div className="inspiration-section-bottom-right-text text-end mt-5">
                            <p className="heading fw-bold">Difficult Roads Lead To<br />Beautiful Destination .</p>
                            <p className="read-more fw-normal">Read More <span className="ms-1"><BiRightArrow size={14} /></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LandingPageInspiration;