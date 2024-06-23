import React from "react";

// Imports For Footer List Item
import footer_lists from "./FooterListItem";

// Imports For Components
import FooterList from "./FooterList/FooterList";

// Imports For Images
import visa_logo from "../../assets/images/visa-logo.png";
import amex_logo from "../../assets/images/Amex.png";
import mastercard_logo from "../../assets/images/Masterrcard.png";
import paypal_logo from "../../assets/images/paypal.png";

//Images For Icons
import { FaLinkedinIn, FaTelegramPlane, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { PiPhoneCall } from "react-icons/pi";
import { TbMailDown } from "react-icons/tb";

// Imports For Styling
import "./Footer.css";

const Footer = () => {
    return (
        <section>
            <div className="container-fluid my-3 px-5 footer-section">
                <div className="container">
                    {/* Footer Lists */}
                    <div className="row d-flex justify-content-between align-items-start my-3 my-md-5">
                        {footer_lists.map((footer_list) => (
                            <div key={footer_list.list_header} className="col-6 col-md-4 col-lg-2">
                                <FooterList items={footer_list} />
                            </div>
                        ))}
                    </div>
                    {/* Payment Methods */}
                    <div className="row d-flex justify-content-between align-items-center my-2 my-md-4">
                        <div className="col-12 col-md-6 col-xl-4 d-flex align-items-center justify-content-center my-3">
                            <ul className="pay-method-list d-flex list-unstyled gap-1 gap-md-3 mb-0 ps-0">
                                <li className="py-2 px-1 text-center"><img src={visa_logo} alt="VISA Logo" /></li>
                                <li className="py-1 px-1 text-center"><img src={amex_logo} alt="AMERICAN EXPRESS Logo" /></li>
                                <li className="py-2 px-1 text-center"><img src={mastercard_logo} alt="MASTERCARD Logo" /></li>
                                <li className="py-2 px-1 text-center"><img src={paypal_logo} alt="PAYPAL Logo" /></li>
                            </ul>
                        </div>
                        {/* Social Media Icons */}
                        <div className="col-12 col-md-6 col-xl-4 d-flex align-items-center justify-content-center my-3">
                            <ul className="social-media-list d-flex justify-content-center align-items-center list-unstyled gap-4 mb-0 ps-0">
                                <li><FaTelegramPlane size={24} color="#07689F" /></li>
                                <li><FaLinkedinIn size={24} color="#07689F" /></li>
                                <li><FaTwitter size={24} color="#07689F" /></li>
                                <li><FaFacebookF size={24} color="#07689F" /></li>
                                <li className="instagram-icon px-1 pb-1 rounded"><FaInstagram size={20} color="#FFFFFF" /></li>
                            </ul>
                        </div>
                        {/* Subscription Section */}
                        <div className="col-12 col-md-12 col-xl-4 d-flex align-items-center justify-content-center my-2">
                            <div>
                                <label className="email-input-label fw-normal" htmlFor="email">Email</label>
                                <div className="subscribe-section mx-auto">
                                    <div className="input-group">
                                        <span className="input-group-text email-icon"><AiOutlineMail size={24} color="#A6A6A6" /></span>
                                        <input className="p-2" id="email" type="text" autoComplete="email" placeholder="Enter Your Email" />
                                        <button className="subscribe-button btn fw-medium" type="button">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright & Contact Info Section */}
            <div className="footer d-flex align-items-center justify-content-center">
                <ul className="d-flex py-3 px-5 mb-0">
                    <li className="copyright-section d-flex align-items-center justify-content-center gap-2">
                        <span className="d-flex align-items-center justify-content-center fw-medium">R</span>
                        <p className="mb-0">Copyright Mina Voyages</p>
                    </li>
                    <li className="mail-us-section d-flex align-items-center justify-content-center gap-2 fw-medium">
                        <TbMailDown size={20} color="#07689F" />
                        <p className="mb-0">Minavoyages@Gmail.Com</p>
                    </li>
                    <li className="address-section d-flex align-items-center justify-content-center gap-2 fw-medium">
                        <SlLocationPin size={20} color="#07689F" />
                        <p className="mb-0">123 Oxford Street,London</p>
                    </li>
                    <li className="contact-section d-flex align-items-center justify-content-center gap-2 fw-medium">
                        <PiPhoneCall size={20} color="#07689F" />
                        <p className="mb-0">+44 20 7123 4567</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Footer;
