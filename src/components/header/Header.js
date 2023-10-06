import React from 'react'
import Nav from '../nav/Nav'
import {BsStars} from "react-icons/bs"
import image1 from "../../assets/images/headerChair.jfif"
import image2 from "../../assets/images/headerChair2.jfif"

const Header = () => {
  return (
   <div className='header'>
    <Nav/>
    <div className="header-content">
      <div className="flex">

      <div className="headings">
        <h1>Minimal</h1>
        <h1>Furniture <span><BsStars className='icon'/></span></h1>
        <h1>Collection</h1>
      </div>

    <div className="image">
      <img src={image2} alt="a chair"/>
    </div>
    </div>
      
     

    <div className="images-and-content">
      <div className="image">
        <img src={image1} alt="a chair" />
      </div>
      <div className="content">
      <h4>25% OFF</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quibusdam et expedita totam iste voluptas repellat.</p>
      </div>
    </div>
   </div>
   </div>
  )
}

export default Header