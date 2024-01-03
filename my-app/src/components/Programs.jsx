import React from 'react'
import { FaCrown  } from "react-icons/fa6";
import SectionHead from './SectionHead';
import {shops} from '../data'
import Card from '../UI/Card'
import { Link } from 'react-router-dom';
import { FaPlay } from "react-icons/fa";



const Programs = () => {
  return (
   <section className="programs">
    <div className='container programs_container'>
       <SectionHead icon={<FaCrown />} title="Our Shops"/>
       <div className="programs_wrapper">
        {
            shops.map(({id, icon, title, info,path }) => {
                return (
                    <Card className="programs_program" key={id}>
                        <span>{icon}</span>
                        <h4>{title}</h4>
                        <small>{info}</small>
                        <Link to={path} className='btn sm'>Learn More <FaPlay /></Link>
                    </Card>
                )
            })
        }
    </div>
    </div>
    
   </section>
  )
}

export default Programs