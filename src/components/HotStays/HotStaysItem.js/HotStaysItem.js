import React from "react";

// Imports For Date Related Functions
import { formatDate } from "./DateFormatter";

// Imports For Icons
import { RiHeart3Line, RiHeart3Fill } from "react-icons/ri";
import { PiSunDimBold } from "react-icons/pi";

// Imports For Styling
import "./HotStaysItem.css";

const HotStaysItem = (props) => {

    const getStars = (rating) => {

        let rate = Math.floor(rating);

        if (rate === 1 || rate === 2) {
            return 1;
        } else if (rate === 3 || rate === 4) {
            return 2;
        } else if (rate === 5 || rate === 6) {
            return 3;
        } else if (rate === 7 || rate === 8) {
            return 4;
        } else if (rate === 9 || rate === 10) {
            return 5;
        }
    };

    return (
        <div className="col mb-3">
            <div className="hot-stays-card card pt-2 pe-2 pb-4 ps-2">
                <div className="hot-stays-card-overlay"></div>
                <div className="hot-stays-card-image-section">
                    <span className="hot-stays-like d-flex justify-content-center align-items-center">
                        {props.isFavourite ? <RiHeart3Fill size={20} color="white" /> : <RiHeart3Line size={20} color="white" />}
                    </span>
                    <img src={props.image} className="card-img-top" alt="..." />
                    <div className="hot-stays-mode-setting d-flex justify-content-between p-2">
                        <div className="hot-stays-suns">
                            {Array(getStars(props.rating)).fill().map((_, index) => (
                                <PiSunDimBold key={index} size={18} color="white" />
                            ))}
                        </div>
                        <p className="hot-stays-rating align-content-center fw-bold my-0">{props.rating}</p>
                    </div>
                </div>
                <div className="card-body p-0 mt-3">
                    <div>
                        <h5 className="hot-stays-title card-title fs-5 fw-bold">{props.title}</h5>
                        <h6 className="hot-stays-subtitle card-subtitle fs-6 fw-semibold lh-sm">{props.side}</h6>
                    </div>
                    <p className="hot-stays-date card-text mt-3 fw-medium">{formatDate(props.startingDate)} - {formatDate(props.endingDate)}</p>
                    <p className="hot-stays-description card-text mt-3 fw-light">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default HotStaysItem;