import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/favicon.png'
import './Header.css'

const Header = () => {
    return (
        <div>
              <nav className='header'>
              <div className="flex ml-3">
              <img className='img' src={logo} alt="" />
               <p className="text-3xl font-bold text-orange-500">Quick-quiz</p>
              </div>
               <div>
                 <Link to="/">Topics</Link>
                 <Link to="/statistics">Statistics</Link>
                 <Link to="/blog">Blog</Link>
               </div>
         </nav>
        </div>
    );
};

export default Header;