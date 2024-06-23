import React from "react";

// Imports For The Discover Your Adventure Items 
import discover_your_adventure_items from "./DiscoverYourAdventureItem/DiscoverYourAdventureItemsList";

// Imports For Components
import DiscoverYourAdventureItem from "./DiscoverYourAdventureItem/DiscoverYourAdventureItem";

// Imports For Styling
import "./DiscoverYourAdventure.css";

const DiscoverYourAdventure = () => {
    return (
        <section>
            <div className="container my-5">
                <div className="mb-5">
                    <p className="discover-your-adventure-heading fw-bold">Go Further With Mina Voyages</p>
                    <p className="discover-your-adventure-subheading fw-normal">Browse By Type</p>
                </div>
                <div className="row row-cols-1 row-cols-lg-2">
                    {discover_your_adventure_items.map((item, index) => {
                        return (
                            <div key={index} className="col mb-4">
                                <DiscoverYourAdventureItem index={index} image={item.image} title={item.title} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default DiscoverYourAdventure;
