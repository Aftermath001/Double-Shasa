import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaFacebook } from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'



const Footer = () => {
  return (
    <footer>
        <div className="container footer_container">
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt='Footer Logo'/>
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi necessitatibus tempore quis!
                </p>
                <div className="footer_socials">
                    <a href='https://facebook.com/' target='_blank' rel='noreferrer noopener'><FaFacebook/></a>
                    <a href='https://twitter.com/' target='_blank' rel='noreferrer noopener'><AiOutlineTwitter/></a>
                    <a href='https://instagram.com/' target='_blank' rel='noreferrer noopener'><AiOutlineInstagram/></a>

                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
                
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact</Link>
                <Link to="/s">Support</Link>
                
            </article>
        </div>
        <div className="footer_copyright">
            <small>2024 TechDeck &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer