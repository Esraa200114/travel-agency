import React from "react";

// Imports For Styling
import "./SpecialDealsItem.css";

// Imports For Icons
import { HiArrowNarrowRight } from "react-icons/hi";

const SpecialDealsItem = (props) => {
    return (
        <div className="deal">
            <div className="special-deal-item-overlay"></div>
            <img src={props.image} className="special-deal-image w-100" />
            <div className="deals-discover d-inline-block px-3 py-2 fs-6">
                <span className="fw-normal">Deals Discover <HiArrowNarrowRight size={16} className="ms-1" /></span>
            </div>
        </div>
    );
}

export default SpecialDealsItem;