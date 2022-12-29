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
                        <h1 className="lg:text-5xl text-primary font-bold font-['Berry_Days'] tracking-widest">
                            <Typewriter
                                options={{
                                    strings: ['Pack Your Bags And <a class="text-info"><br/>Get Set Go!!!</a>'],
                                    autoStart: true,
                                    loop: true,
                                }} />
                        </h1>

                        <p className="py-6 lg:text-lg text-sm text-center ">Enter your travel preferences and let us find your next big vacay destination!</p>

                        <input type="text" placeholder="Andaman.." className="input input-bordered input-base-100 w-full max-w-xs shadow-xl bg-success p-10" />
                    </div>
                </div>
            </div>
        </div >
    );
};


export default Banner;