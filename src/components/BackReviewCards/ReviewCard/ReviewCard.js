import React from "react";

// Imports For Styling
import "./ReviewCard.css";

const ReviewCard = (props) => {
    return (
        <div className="review-card">
            <div className="review-card-image">
                <img src={props.image} alt="" />
            </div>
            <div className="review-card-body d-flex justify-content-center align-items-start flex-column">
                <h6 className="review-card-body-reviewer d-flex justify-content-start align-items-center fw-medium fs-6"><img src={props.country} />{props.name}</h6>
                <p className="review-card-body-review fw-normal">{props.review}</p>
            </div>
        </div>
    );
}

export default ReviewCard;