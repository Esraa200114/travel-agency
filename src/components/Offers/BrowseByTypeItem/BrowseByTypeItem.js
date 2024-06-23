import React, { useState } from "react";

// Imports For Images
import hoverImage from "../../../assets/images/airplane-wing.jpg";

// Imports For Icons
import { PiHeartLight } from "react-icons/pi";

// Imports For Styling
import "./BrowseByTypeItem.css";

const BrowseByTypeItem = (props) => {

    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className="browse-by-type-item-card-col col mb-4">
            <div className="browse-by-type-item-card card pt-2 pe-2 pb-3 ps-2" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                <div className={`browse-by-type-item-card-overlay ${hovered ? 'browse-by-type-item-card-overlay-active' : ''}`}></div>
                <div className="browse-by-type-item-card-image-section">
                    <span className="browse-by-type-item-favourite d-flex justify-content-center align-items-center">
                        <PiHeartLight size={20} color="white" width="1px" />
                    </span>
                    {hovered ? (
                        <img src={hoverImage} className="card-img-top" alt="..." />
                    ) : (
                        <img src={props.image} className="card-img-top" alt="..." />
                    )}
                    <div className="browse-by-type-item-mode-setting d-flex justify-content-between px-2 py-3">
                        <span className="fs-6 ms-2 fw-bold">123</span>
                        <p className="browse-by-type-item-rating my-0 me-2 fw-bold">8,2</p>
                    </div>
                </div>
                <div className="card-body p-0 mt-2">
                    <h5 className="browse-by-type-item-title card-title fs-5 mb-0 fw-bold">{props.title}</h5>
                </div>
            </div>
        </div>
    );
}

export default BrowseByTypeItem;