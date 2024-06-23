import React, { useContext } from "react";

// Import For Context
import DestinationsContext from "../../store/destinations-context.js";

// Imports For Components
import HotStaysItem from "./HotStaysItem.js/HotStaysItem";

// Imports For Styling
import "./HotStays.css";

const HotStays = () => {

    const ctx = useContext(DestinationsContext);

    let content = "";
    if (ctx.destinations.length === 0) {
        content = <div className="container d-flex justify-content-center align-items-center">
            <p className="no-data-text text-center fw-bold my-5">No Destinations Found.</p>
        </div>
    } else {
        content = ctx.destinations.map((item) => {
            return <HotStaysItem key={item.id} image={item.image} title={item.city} description={item.description} endingDate={item.endingDate} startingDate={item.startingDate} isFavourite={item.isFavourite} rating={item.rating} side={item.side} />;
        })
    }

    return (
        <section>
            <div className="container">
                {/* Section Headings */}
                <div className="mb-4">
                    <p className="hot-stays-heading fw-bold">Explore Stays In Trending Destinations</p>
                    <p className="hot-stays-sub-heading fs-6 fw-semibold">Find Hot Stays!</p>
                </div>
                {/* Section Content  */}
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                    {content}
                </div>
            </div>
        </section>
    );
}

export default HotStays;