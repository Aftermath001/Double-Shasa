import React from 'react'
import '../pages/home/home.css'
import { Link } from 'react-router-dom'
import Homepic1 from '../images/herosection.jpg'
const MainHeader = () => {
  return (
    <header className='main_header'>
      <div className="main_header-container">
        <div className="main_header_left">
          <h4>Commercial Printer in Kakamega</h4>
          <h1>Double Shasa Limited</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Incidunt ex doloremque voluptate omnis similique.
             Possimus vel sequi doloremque sit ex cum, deserunt exercitationem, 
            voluptate ducimus laboriosam ad aliquam blanditiis ipsa?
          </p>
          <Link to="/contact" className='btn 1g'>GET QUOTE</Link>
        </div>
        <div className="main_header_right">
          <div className="main_header_image">
            <img src={Homepic1} alt='homePic' className='homepic'/>
          </div>
        </div>
      </div>

    </header>
  )
}

export default MainHeader