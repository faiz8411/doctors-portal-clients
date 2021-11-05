import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import DentalCheck from '../DentalCheck/DentalCheck';
import Services from '../Services/Services';
import TestmonialPatients from '../TestmonialPatients/TestmonialPatients';
import Blogs from './Blogs/Blogs';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <DentalCheck></DentalCheck>
            <AppointmentBanner></AppointmentBanner>
            <TestmonialPatients></TestmonialPatients>
            <Blogs></Blogs>

        </div>
    );
};

export default Home;