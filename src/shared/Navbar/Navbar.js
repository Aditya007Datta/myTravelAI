import React from 'react'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import MyTravelAI from '../../assets/Navbar/logoanimation.json'
import MyTravel from '../../assets/Navbar/MyTravelAIlogo.lottie.json'
const Navbar = () => {

  const menuItems = (
    <React.Fragment>
      <li><Link to='/' className='hover:text-info text-xl text-warning font-bold hover:border-2 hover:border-grey-600 rounded'>Home</Link>{" "}</li>
      <li><Link to='/about' className='hover:text-info text-xl text-warning font-bold hover:border-2 hover:border-grey-600 rounded '>About Us</Link>{" "}</li>
      <li><Link to='/project' className='hover:text-info text-xl text-warning font-bold hover:border-2 hover:border-grey-600 rounded'>Our Project</Link>{" "}</li>
    </React.Fragment>
  )

  return (
    <div>
      <div className="navbar bg-neutral">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52 ">
              {menuItems}
            </ul>
          </div>
          <Lottie animationData={MyTravelAI} loop={true} className="h-20 w-20" />
          {/* <Lottie animationData={MyTravel} loop={true} className="h-20 w-20" /> */}
          <a className="btn btn-ghost normal-case text-3xl tracking-tight font-['Berry_Days'] tracking-widest">MyTravel<a class="text-primary">AI</a></a>
          {/* <a><img src={MyTravel} className="h-20 w-20 max-w-sm rounded-lg shadow-2xl" /></a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};


export default Navbar;


