import React from 'react';
import Banner from './Banner/Banner';
import SeeAll from './SeeAll/SeeAll';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <SeeAll></SeeAll>
        </div>
    );
};

export default Home;