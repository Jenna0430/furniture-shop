import React from 'react'
import image from "../../assets/images/mainImage.jpg"
import {BsArrowLeft} from "react-icons/bs"
import {BsArrowRight} from "react-icons/bs"
import ReviewCard from '../card/ReviewCard'
import {BsStars} from "react-icons/bs"
import {FaCouch} from "react-icons/fa"
import "./experience.css"

const Experience = () => {
  return (
    <div className="experience">
      <h1 className="secondHeading mt-5 mb-3 text-center">
        Enjoy <FaCouch className='icon'/> fully furnished space <br />
        <BsStars className='icon'/> in less than week
      </h1>
      <div className="experience-card">

      <div className="experience-image img-fluid img-thumbnail">
        <img src={image} alt="" className='img-fluid'/>
      </div>

      <div className='section container'>
        <div className="row">
        <div className='section-heading'>
         <h1 className="secondHeading col-8">
          Our Customers <br />
          love us
            </h1>
        </div>
     
        <div className='section-icon col-4'>
        <BsArrowLeft className='section-1-icon'/>
        <BsArrowRight className='section-1-icon'/>
        </div>

        </div>
        
      </div>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <ReviewCard/>
          </div>
          {/* <div className="col-3">
            <ReviewCard/>
          </div>
          <div className="col-3">
            <ReviewCard/>
          </div> */}
        </div>
      </div>
      </div>
     

    </div>
  )
}

export default Experience