import React from "react";
import { Link } from "react-router-dom";

// Imports For Images
import mina_voyages from "../../assets/images/mina-voyages.png";
import england from "../../assets/images/england.png";
import profile_photo from "../../assets/images/profile-photo.png";

// Imports For Icons
import { LuDollarSign } from "react-icons/lu";
import { BiHelpCircle, BiSearchAlt } from "react-icons/bi";
import { RiHeart3Line } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";

// Imports For Styling
import "./Header.css";

const Header = () => {

    return (
        <section>
            <header>
                <nav className="navbar navbar-expand-lg pt-4">
                    <div className="container">
                        <div className="row w-100 d-xl-flex justify-content-xl-between align-items-xl-center mx-auto">
                            {/* Logo */}
                            <div className="col-lg-6 col-xl-2 d-flex justify-content-between">
                                <a className="navbar-brand" href="#"><img src={mina_voyages} width="198px" height="29px" alt="Mina Voyages Logo" /></a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                            {/* Search Bar */}
                            <div className="col-lg-12 col-xl-5 order-3 order-xl-2 mt-4 mt-xl-0">
                                <form className="search-bar-section d-flex" role="search">
                                    <input id="searchInput" className="search-bar w-100" type="search" aria-label="Search" />
                                    <button className="search-button border-0" type="button">
                                        <BiSearchAlt size={24} color="rgba(51, 51, 51, 1)" />
                                    </button>
                                </form>
                            </div>
                            {/* Icons Section */}
                            <div className="col-lg-6 col-xl-auto order-2 order-xl-3">
                                <div className="d-flex justify-content-end">
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="icons-list list-unstyled navbar-nav gap-4 d-flex align-items-center justify-content-center mt-0">
                                            <li className="nav-item">
                                                <a className="nav-link px-1 py-2" aria-current="page" href="#"><img src={england} alt="England" /></a>
                                            </li>
                                            <li className="nav-item">
                                                <LuDollarSign size={24} color="rgba(4, 62, 95, 1)" />
                                            </li>
                                            <li className="nav-item">
                                                <BiHelpCircle size={24} color="rgba(4, 62, 95, 1)" />
                                            </li>
                                            <li className="nav-item">
                                                <RiHeart3Line size={24} color="rgba(4, 62, 95, 1)" />
                                            </li>
                                            <li className="nav-item">
                                                <FiPhoneCall size={24} color="rgba(4, 62, 95, 1)" />
                                            </li>
                                            {/* Dropdown Section */}
                                            <li className="nav-item dropdown">
                                                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    {/* Account Info */}
                                                    <div className="d-flex align-items-center gap-2">
                                                        <img className="account-image" src={profile_photo} alt="Profile" />
                                                        <div>
                                                            <span className="your-account d-block">Your Account</span>
                                                            <span className="account-name d-block fw-normal">Anna Carinna</span>
                                                        </div>
                                                    </div>
                                                </a>
                                                {/* Dropdown Menu */}
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item d-block px-3 text-start fw-normal" href="#">View Profile</a></li>
                                                    <li><Link to="/dashboard" className="dropdown-item d-block px-3 text-start fw-normal">Dashboard</Link></li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li><a className="dropdown-item d-block px-3 text-start fw-normal" href="#">Logout</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </section>
    );
};

export default Header;
