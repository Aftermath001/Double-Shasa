import React from 'react'
import { useState } from 'react';
import './navbar.css'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/logo.png'
import { BsJustify } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

import {links} from '../data'
const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
   <nav>
        <div className="container nav_container">
          <Link to="/" className='logo' onClick={() =>setIsNavShowing(false) }>
            <img src={Logo} alt='Nav Logo'/>
          </Link>
           <ul className={`nav_links ${isNavShowing ? 'show_nav' :
           'hide_Nav'} `}>
            {
               links.map(({name, path}, index) => {
                return (
                  <li key={index}>
                    <NavLink to={path} className={({isActive})=> isActive ? 'active-nav':''}onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                  </li>
                )
               })
            }

           </ul>
            
           <button className='nav_toogle-btn' onClick={() => setIsNavShowing(prev => !prev)}>
            {
              isNavShowing ? <IoMdClose/>: <BsJustify />
            }
           </button>
        </div>
   </nav>
  )
}

export default Navbar