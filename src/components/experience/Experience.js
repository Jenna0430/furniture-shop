import React from 'react'
import image from "../../assets/images/mainImage.jpg"
import {BsArrowLeft} from "react-icons/bs"
import {BsArrowRight} from "react-icons/bs"
import ReviewCard from '../card/ReviewCard'

const Experience = () => {
  return (
    <div className="experience">
      <div className="image">
        <img src={image} alt="" className='img-fluid'/>
      </div>

      <div>
        <div>
         <h1 className="secondHeading">
          Our Customers <br />
          love us
            </h1>
        </div>
     
        <div>
        <BsArrowLeft/>
        <BsArrowRight/>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <ReviewCard/>
          </div>
          <div className="col-3">
            <ReviewCard/>
          </div>
          <div className="col-3">
            <ReviewCard/>
          </div>
        </div>
      </div>

      

    </div>
  )
}

export default Experience