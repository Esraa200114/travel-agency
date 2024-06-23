import React from "react";

// Import The Back Review Cards List 
import reviews_list from "./BackReviewCardsList";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper Styles
import "../../../node_modules/swiper/swiper.min.css";
import "../../../node_modules/swiper/modules/pagination.min.css";
import "../../../node_modules/swiper/modules/navigation.min.css";

// Imports For Styling
import "./BackReviewCards.css";

// Imports For Components
import ReviewCard from "./ReviewCard/ReviewCard";

const BackReviewCards = () => {
    return (
        <section>
            <div className="back-review-cards-section">
                <div className="container">
                    <Swiper
                        slidesPerView={3}
                        pagination={{
                            dynamicBullets: true,
                            clickable: true
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 100
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 25
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 50
                            },
                        }}
                        modules={[Pagination]}
                    >
                        {reviews_list.map((review_item, index) => <SwiperSlide key={index}><ReviewCard name={review_item.reviewer_name} country={review_item.reviewer_country} image={review_item.reviewer_image} review={review_item.review} /></SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default BackReviewCards;
