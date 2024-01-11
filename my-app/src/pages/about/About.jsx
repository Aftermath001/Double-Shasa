import React from 'react'
import Header from '../../components/Header'
import HeaderPic from '../../images/headerImage.jpg'
import StoryImage from '../../images/StoryImage.JPG'
import VisionImage from '../../images/Vision.JPG'
import MissionImage from '../../images/mission.jpg'
import './about.css'


const About = () => {
  return (
   <>
   <Header title="About Us" image={HeaderPic}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Eaque itaque unde perspiciatis exercitationem similique explicabo 
    ratione mollitia facilis dicta dolorum.
   </Header>
   <section className="about_story">
    <div className='container about_story-container'>
      <div className="about_section-image">
        <img src={StoryImage} alt="Our Story"/>
      </div>
      <div className="about_section-content">
        <h1>OUR STORY</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Animi exercitationem doloremque consequatur cum nobis 
          nam neque minima perferendis quis blanditiis.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Animi exercitationem doloremque consequatur cum nobis 
          nam neque minima perferendis quis blanditiis.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Animi exercitationem doloremque consequatur cum nobis 
          nam neque minima perferendis quis blanditiis.</p>
      </div>
    </div>

   </section>
   <section className="about_Vision">
    <div className='container about_Vision-container'>
      <div className="about_section-content">
        <h1>OUR VISION</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Animi exercitationem doloremque consequatur cum nobis 
          nam neque minima perferendis quis blanditiis.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Animi exercitationem doloremque consequatur cum nobis 
          nam neque minima perferendis quis blanditiis.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Animi exercitationem doloremque consequatur cum nobis 
          nam neque minima perferendis quis blanditiis.</p>
      </div>
      <div className="about_section-image">
        <img src={VisionImage} alt="Our Vision"/>
      </div>
    </div>

   </section>
   <section className="about_mission">
    <div className='container about_mission-container'>
      <div className="about_section-image">
        <img src={MissionImage } alt="Our Mission"/>
      </div>
      <div className="about_section-content">
        <h1>OUR MISSION</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Animi exercitationem doloremque consequatur cum nobis 
          nam neque minima perferendis quis blanditiis.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Animi exercitationem doloremque consequatur cum nobis 
          nam neque minima perferendis quis blanditiis.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Animi exercitationem doloremque consequatur cum nobis 
          nam neque minima perferendis quis blanditiis.</p>
      </div>
    </div>

   </section>
   </>
  )
}

export default About