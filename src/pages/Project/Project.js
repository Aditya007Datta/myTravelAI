import Lottie from 'lottie-react';
import React from 'react'

import treeAnimation from "./../../assets/Project/46533-charts.json";
const Project = () => {

    return (
        <div>
            <div className="bg-neutral p-10">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className='w-[300px] lg:w-full'>
                        <Lottie animationData={treeAnimation} loop={true} />;

                    </div>






                    <div className='w-[300px] lg: w-full flex flex-col justify-center items-center'>
                        <h1 className="lg:text-5xl text-primary font-bold">
                            Pro<a class="text-zinc-400">ject</a>
                        </h1>

                        <p className="py-6 lg:text-lg text-sm text-center">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Project;