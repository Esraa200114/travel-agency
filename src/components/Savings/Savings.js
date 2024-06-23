import React from "react";

// Imports For Images
import app_store from "../../assets/images/app-store.gif";
import play_store from "../../assets/images/google-play.gif";

// Imports For Icons
import { MdQrCode2 } from "react-icons/md";
import { LiaQrcodeSolid } from "react-icons/lia";

// Imports For Styling
import "./Savings.css";

const Savings = () => {
    return (
        <section>
            <div className="container py-4">
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-md-7 col-lg-12 col-xl-6">
                        <p className="savings-heading fw-bold fs-5 mb-1">Go Further With The Mina Voyages</p>
                        <p className="savings-subheading1 fw-normal mb-1">Enjoy savings on chosen hotels and flights when you book through Mina Voyages website. Additionally, earn One Key Cash for every booking made through the app.</p>
                        <p className="savings-subheading2 fw-normal">Secured By Europe GTP</p>
                    </div>
                    <div className="col-5 col-md-3 col-lg-2 col-xl-2 d-flex flex-column justify-content-between mx-auto mx-xl-0">
                        <div className="d-flex align-items-center justify-content-between gap-4 gap-sm-3 gap-xl-1">
                            <img src={app_store} alt="Download the app from app store" width="120px" height="50px" />
                            <div className="savings-icon-container d-inline-block" >
                                <MdQrCode2 size={40} />
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-4 gap-sm-3 gap-xl-1">
                            <img src={play_store} alt="Download the app from play store" width="120px" height="50px" />
                            <div className="savings-icon-container d-inline-block">
                                <LiaQrcodeSolid size={40} />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
}

export default Savings;