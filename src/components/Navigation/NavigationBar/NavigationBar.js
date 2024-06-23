import React from "react";

// Imports For Components
import NavigationItem from "../NavigationItem/NavigationItem";

// Imports For Styling
import "./NavigationBar.css";

const NavigationBar = () => {
    return (
        <section>
            <div className="navigation-section container-fluid d-flex justify-content-center">
                <ul className="nav-bar list-unstyled d-flex justify-content-start align-items-center gap-3 p-1">
                    <NavigationItem>Trip</NavigationItem>
                    <NavigationItem>%Deals</NavigationItem>
                    <NavigationItem>Hotel</NavigationItem>
                    <NavigationItem>Flight</NavigationItem>
                    <NavigationItem>Apartment</NavigationItem>
                    <NavigationItem>Camper</NavigationItem>
                </ul>
            </div>
        </section>
    );
}

export default NavigationBar;
