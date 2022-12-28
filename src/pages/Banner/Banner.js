import Lottie from 'lottie-react';
import React from 'react'
import Typewriter from 'typewriter-effect';
import travelAnimation from "./../../assets/Banner/18517-the-travelers-walking-cycle-delivery.json";
const Banner = () => {


    return (
        <div>
            <div className="bg-neutral p-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
                    <div className='w-[300px] lg:w-full'>
                        <Lottie animationData={travelAnimation} loop={true} />

                    </div>

                    <div className='w-[300px] lg: w-full flex flex-col justify-center items-center'>
                        <h1 className="lg:text-5xl text-primary font-bold font-['Berry_Days']">
                            <Typewriter
                                options={{
                                    strings: ['Pack Your Bags And Get Set Go!'],
                                    autoStart: true,
                                    loop: 1,
                                }} />
                        </h1>

                        <p className="py-6 lg:text-lg text-sm text-center font-dm-sans ">Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        <input type="text" placeholder="Andaman.." className="input input-bordered input-base-100 w-full max-w-xs bg-neutral p-10" />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Banner;