import React from 'react'
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';

import Project from './Project/Project';



const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <Project></Project>
            <AboutUs></AboutUs>
        </div>
    );
};


export default Home;