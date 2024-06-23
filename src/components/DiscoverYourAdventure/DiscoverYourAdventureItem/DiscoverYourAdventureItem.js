import React from "react";

// Imports For Styling
import "./DiscoverYourAdventureItem.css";

const DiscoverYourAdventureItem = (props) => {

    let roundedCornersClass = "";

    switch (props.index) {
        case 0:
            roundedCornersClass = "top-left-rounded-corners";
            break;
        case 1:
            roundedCornersClass = "top-right-rounded-corners";
            break;
        case 2:
            roundedCornersClass = "bottom-left-rounded-corners";
            break;
        default:
            roundedCornersClass = "bottom-right-rounded-corners";
    }

    return (
        <div className={`${"discover-your-adventure-section-column"} ${roundedCornersClass}`}>
            <div className="discover-your-adventure-image-section" style={{ backgroundImage: `url(${props.image})` }}>
            </div>
            <div className={`${"discover-your-adventure-overlay"} ${roundedCornersClass}`}>
                <h5 className="discover-your-adventure-item-title fw-bold mb-0">{props.title}</h5>
            </div>
        </div>
    );
}

export default DiscoverYourAdventureItem;
