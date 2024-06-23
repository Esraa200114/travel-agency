import React from "react";

// Imports For Icons
import { HiOutlineBuildingOffice, HiOutlineCalendarDays } from "react-icons/hi2";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";

// Imports For Styling
import "./PageSlogan.css";

const FlightLandingSlogan = () => {
    return (
        <section>
            <div className="slogan-section container-fluid">
                <div className="slogan-section-overlay d-flex align-items-center">
                    <div className="container d-flex flex-column justify-content-between">
                        {/* Banner Text */}
                        <div className="mb-4 mb-xl-5">
                            <p className="banner-heading mb-0 fw-bold">Discover Your Trips<br />Worldwide</p>
                            <p className="banner-sub-heading fw-semibold fs-6">Special offers to suit your plan</p>
                        </div>
                        {/* Search/Book Form */}
                        <div className="row m-1">
                            <div className="col-12 col-lg-3 col-xl-4 p-0">
                                <div className="place-input input-group">
                                    <span className="input-group-text input-icon"><HiOutlineBuildingOffice size={24} color="rgba(4, 62, 95, 1)"/></span>
                                    <input id="placeInput" type="text" className="form-control" placeholder="where are you going to?" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 col-xl-3 p-0">
                                <div className="date-input input-group">
                                    <span className="input-group-text input-icon"><HiOutlineCalendarDays size={24} color="rgba(4, 62, 95, 1)"/></span>
                                    <input id="dateInput" type="text" className="form-control text-center" placeholder="check in date     check out date" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 col-xl-4 p-0">
                                <div className="book-input input-group">
                                    <span className="input-group-text input-icon"><MdOutlinePersonAddAlt size={24} color="rgba(4, 62, 95, 1)"/></span>
                                    <input id="detailsInput" type="text" className="form-control text-center" placeholder="adults 2     children 3     room" />
                                    <span className="input-group-text slider-icon me-4"><SlArrowDown size={20} color="rgba(4, 62, 95, 1)"/></span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-2 col-xl-1 p-0">
                                <button className="book-button fs-6 lh-base w-100 px-lg-3 fw-bold" type="button">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FlightLandingSlogan;