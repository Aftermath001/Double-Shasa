import React from 'react'
import './home.css'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Testimonials from '../../components/Testimonials'
import Footer from '../../components/Footer'
const Home = () => {
  return (
    <>
    <MainHeader />
    <Programs/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default Home