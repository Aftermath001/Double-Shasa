import React from 'react'
import Header from '../../components/Header'
import ContactPic from '../../images/contact1.jpg'
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import './contact.css'




const Contact = () => {
  return (
  <>
  <Header title="Get In Touch" image={ContactPic}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Maxime suscipit nulla pariatur.
  </Header>
  <section className="contact">
    <div className="container contact_container">
     <div className="contact_wrapper">
      <a href='mailto:alvinasiachi@gmail.com' target='_blank' rel="noreferrer noopener"><MdEmail/></a>
      <a href='http://m.me/100077330556230' target='_blank' rel="noreferrer noopener"><BsMessenger/></a>
      <a href='http://wa.me/+254797246096' target='_blank' rel="noreferrer noopener"><IoLogoWhatsapp /></a>

     </div>
    </div>
  </section>
  </>
  )
}

export default Contact