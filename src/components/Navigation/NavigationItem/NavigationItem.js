import React, { useState } from "react";

// Imports For Styling
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./NavigationItem.css";

const NavigationItem = (props) => {

    const [isActive, setIsActive] = useState(false);

    const handleOnNavigationItemClick = () => {
        setIsActive(!isActive);
    };

    return (
        <li className={`${"navigation-item fs-6 py-2 lh-base"} ${isActive ? "active fw-bold" : "not-active fw-medium"}`} onClick={handleOnNavigationItemClick}>{props.children}</li>
    );
}

export default NavigationItem;