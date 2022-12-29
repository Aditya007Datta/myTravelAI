import Lottie from 'lottie-react';
import React from 'react'

import teamAnimation from "./../../assets/AboutUs/72259-team.json";
const AboutUs = () => {

    return (
        <div>
            <div className="bg-neutral p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
                    <div className='w-[300px] lg:w-full'>
                        <Lottie animationData={teamAnimation} loop={true} />;

                    </div>
                    <div className='w-[300px] lg: w-full flex flex-col justify-center items-center'>
                        <h1 className="lg:text-5xl text-primary font-bold font-['Berry_Days'] tracking-wide">
                            About <a class="text-info">Us!!</a>
                        </h1>

                        <p className="py-6 lg:text-lg text-sm text-justify">Welcome to our team of developers!

                            We are a group of passionate individuals who are just starting out on our journey in the world of artificial intelligence-machine learning and full stack development. Our team is made up of diverse individuals with a wide range of skills and experiences. We are constantly learning and growing, and we are excited to take on new challenges and projects in the world of tech.

                            We believe in the power of collaboration and working together towards a common goal.

                        </p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AboutUs;