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
                        <h1 className="lg:text-5xl text-primary font-bold font-['Berry_Days'] tracking-wide">
                            Pro<a class="text-info">ject</a>
                        </h1>
                        <br></br>
                        <p className="py-6 lg:text-lg text-sm text-justify">Tourism and taking breaks from work reduces the stress felt by workers. Stress impacts focus, so stress-relieving vacations can help return focus through a reduction in stress. People have different destination options for the holidays but sometimes our options for vacations are not good all the time to visit every place, because some destination are only famous and worth visiting at a particular season. Hence choosing a destination based on the information available on the Internet and from various sources are the most difficult task during planning, before or after travel.<br></br> <br></br>There are many travel recommendation systems which provides many suggestions to users, but some technical, system and usability accuracy have been neglected. To overcome this problem, in-depth understanding of decision-making is necessary for searching information. Hence, we have proposed a Decision tree-based tourism recommendation system. This system will help for getting more information on the basis of the people’s review who visited the places. It will give the suggestion of all the desired place. This recommender system consists of two modules namely, Admin and User. Admin has authority to add the locations and view the added location. Users can view their desired location and the opinion analytics related to it on the basis of reviews.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Project;