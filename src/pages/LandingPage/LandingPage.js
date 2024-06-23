import React from 'react';

// Imports For Components
import Header from '../../components/Header/Header';
import NavigationBar from '../../components/Navigation/NavigationBar/NavigationBar';
import PageSlogan from "../../components/PageSlogan/PageSlogan";
import SpecialDeals from '../../components/SpecialDeals/SpecialDeals';
import HotStays from '../../components/HotStays/HotStays';
import Offers from '../../components/Offers/Offers';
import PageInspiration from "../../components/PageInspiration/PageInspiration";
import DiscoverYourAdventure from '../../components/DiscoverYourAdventure/DiscoverYourAdventure';
import BackReviewCards from '../../components/BackReviewCards/BackReviewCards';
import Savings from '../../components/Savings/Savings';
import Footer from '../../components/Footer/Footer';

const LandingPage = () => {
    return (
        <React.Fragment>
            {/* Header */}
            < Header />
            {/* Naviagtion Bar */}
            < NavigationBar />
            {/* Page Slogan Section */}
            < PageSlogan />
            {/* Special Deals Section */}
            < SpecialDeals />
            {/* Hot Stays Section */}
            < HotStays />
            {/* Offers Section */}
            < Offers />
            {/* Page Inspiration */}
            < PageInspiration />
            {/* Discover Your Adventure Section */}
            < DiscoverYourAdventure />
            {/* Back Review Cards */}
            < BackReviewCards />
            {/* Savings Section */}
            < Savings />
            {/* Footer Section */}
            < Footer />
        </React.Fragment>
    );
}

export default LandingPage;