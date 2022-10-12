import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/favicon.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
// import './Header.css';
const Header = () => {
  const [open, setOpen] = useState(false);
  return (

    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex md:items-center justify-between  bg-slate-800 py-4 md:px-10  px-7'>
        <div className="font-bold text-3xl cursor-pointer flex items-center text-orange-500">
          <img className='text-3xl mr-2 pt-2' src={logo} alt="" />
          <span>Quick-quiz</span>
        </div>
        <div onClick={() => setOpen(!open)} className="h-6 w-6 absolute right-8 top-6 cursor-pointer text-white md:hidden">
          {
            open ? <XMarkIcon /> : <Bars3Icon />
          }
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-slate-800 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in' ${open ? 'top-16' : 'top-[-490px]'}`}>
          <li className='md:ml-8 text-xl md:my-0 my-7'><Link className='text-white hover:text-orange-500 duration-500' to="/">Topics</Link></li>
          <li className='md:ml-8 text-xl md:my-0 my-7'><Link className='text-white hover:text-orange-500 duration-500' to="/statistics">Statistics</Link></li>
          <li className='md:ml-8 text-xl md:my-0 my-7'><Link className='text-white hover:text-orange-500 duration-500' to="/blog">Blog</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;