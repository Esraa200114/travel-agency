import React from "react";

// Import Special Deals Item List
import special_deals_items from "./SpecialDealsItemList";

// Imports For Components
import SpecialDealsItem from "./SpecialDealsItem/SpecialDealsItem";

// Imports For Styling
import "./SpecialDeals.css";

const SpecialDeals = () => {
    return (
        <section>
            <div className="container my-5">
                {/* Section Headings */}
                <div className="mb-5">
                    <p className="special-deals-heading fw-bold">Discover Our Special Deals</p>
                    <p className="special-deals-sub-heading fs-6 fw-semibold">Find Hot Stays!</p>
                </div>
                {/* Section Content  */}
                <div className="first-row row p-0 m-0">
                    <div className="image-1 image-1-full-width pb-1 p-1">
                        <SpecialDealsItem image={special_deals_items[0]} />
                    </div>
                    <div className="image-2 pb-1 p-1">
                        <SpecialDealsItem image={special_deals_items[1]} />
                    </div>
                    <div className="image-3 pb-1 p-1">
                        <SpecialDealsItem image={special_deals_items[2]} />
                    </div>
                </div>
                <div className="second-row row p-0 m-0">
                    <div className="image-4 image-4-full-width pb-1 p-1">
                        <SpecialDealsItem image={special_deals_items[3]} />
                    </div>
                    <div className="image-5 pb-1 p-1">
                        <SpecialDealsItem image={special_deals_items[4]} />
                    </div>
                    <div className="image-6 pb-1 p-1">
                        <SpecialDealsItem image={special_deals_items[5]} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SpecialDeals;