import React from "react";

// Imports For Offers List 
import offers_list from "./OffersList";

// Imports For Components
import BrowseByTypeItem from "./BrowseByTypeItem/BrowseByTypeItem";

// Imports For Styling
import "./Offers.css";

const Offers = () => {
    return (
        <section>
            <div className="container my-5">
                {/* Section Headings */}
                <div className="mb-5">
                    <p className="offers-heading fw-bold">Compare The Highest Reviewed Past Offers</p>
                    <p className="offers-subheading fw-normal">Browse By Type</p>
                </div>
                {/* Section Content  */}
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                    {offers_list.map((item) => {
                        return <BrowseByTypeItem key={Math.random()} image={item.image} title={item.title} />;
                    })}
                </div>
            </div>
        </section>
    );
}

export default Offers;