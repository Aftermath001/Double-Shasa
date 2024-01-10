import React, { useState } from 'react'
import SectionHead from './SectionHead'
import {ImQuotesLeft} from 'react-icons/im'
import Card from '../UI/Card'
import {testimonials} from "../data"
import { FaArrowCircleLeft, FaArrowCircleRight} from "react-icons/fa";
import Avatar from '../images/profile.jpg'



const Testimonials = () => {
    const [index, setIndex] =useState(0)
    const {name,quote,date} = testimonials[index];
    const nextTestimonialHandler = () =>{
        setIndex(prev => prev + 1);

        if(index >= testimonials.length - 1){
            setIndex(0)
        }

    }
    const prevTestimonialHandler = () =>{
        setIndex(prev => prev - 1);
        if(index <= 0){
            setIndex(testimonials.length -1 )
        }
    }
  return (
        <section className='testimonials'>
            <div className='container testimonials_container'>
                <SectionHead icon={<ImQuotesLeft/>} title="Testimonials" className="testimonial_head"/>
                <Card className="testimonial">
                    
                        <div className='testimonial_avatar'>
                            <img src={Avatar} alt={name}/>
                        </div>
                        <p className='testimonial_quote'>{`"${quote}"`}</p>
                        <h5>{name}</h5>
                        <small className='testimonial_title'>{date}</small>
                    

                </Card>
                <div className="testimonial_btn-container">
                    <button className='testimonials_btn' onClick={prevTestimonialHandler}><FaArrowCircleLeft/></button>
                    <button className='testimonials_btn'onClick={nextTestimonialHandler}><FaArrowCircleRight/></button>

                </div>
            </div>

        </section>  )
}

export default Testimonials