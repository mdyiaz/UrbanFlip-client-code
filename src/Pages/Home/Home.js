import React from 'react';
import Banner from './Banner/Banner';
import MeaningFullSection2 from './MeaningFullSection2/MeaningFullSection2';
import MeaningFullSection1 from './MeaningFullSection_1/MeaningFullSection1';
import SeeAll from './SeeAll/SeeAll';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <SeeAll></SeeAll>
            <MeaningFullSection2></MeaningFullSection2>
           <MeaningFullSection1></MeaningFullSection1>
        </div>
    );
};

export default Home;