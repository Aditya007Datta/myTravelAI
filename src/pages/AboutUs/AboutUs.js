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
                        <h1 className="lg:text-5xl text-primary font-bold">
                            About <a class="text-zinc-400/50">Us</a>
                        </h1>

                        <p className="py-6 lg:text-lg text-sm text-center">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AboutUs;