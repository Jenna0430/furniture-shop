import React from 'react'
import Nav from '../nav/Nav'
import {BsStars} from "react-icons/bs"
import image1 from "../../assets/images/headerChair.jfif"
import image2 from "../../assets/images/headerChair2.jfif"
import "./header.css"

const Header = () => {
  return (
   <div className='header'>
    <Nav/>
    <div className="header-content">
      <div className="container text-center pt-5">

      <div className="row">
       <div className="headings col pl-3 text-light">
        <h1>Minimal</h1>
        <h1>Furniture <span><BsStars className='icon'/></span></h1>
        <h1>Collection</h1>
      </div>

      <div className="image col pr-5 img-fluid rounded float-start">
      <img src={image2} alt="a chair"/>
      </div>
    
      </div>
    </div>
      
     

    <div className="images-and-content container pt-5 mb-5">
      <div className="row">
      <div className="image col mb-3">
        <img src={image1} alt="a chair" />
      </div>

      <div className="content col">
      <h4 className='pt-5'>25% OFF</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quibusdam et expedita totam iste voluptas repellat.</p>
      </div>

      </div>
        </div>

   </div>
   </div>
  )
}

export default Header