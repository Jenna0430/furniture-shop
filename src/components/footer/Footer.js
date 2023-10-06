import React from 'react'
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BiLogoLinkedin} from "react-icons/bi"
import {BsInstagram} from "react-icons/bs"
import {BiLogoFacebook} from "react-icons/bi"
import {FaChair} from "react-icons/fa"
import {AiOutlineCopyrightCircle} from "react-icons/ai"

import "./footer.css"

const Footer = () => {
  return (
    <div className="footer mt-5">
      <h1 className="secondHeading text-center">Feather is the stress-free way
      <br />
      to furnish your home</h1>

      <button className="special-button center-button text-center">
        Shop furniture
      </button>

      <div className="footer-bottom">
        <div className="row">
          <div className="col flex">
            <h4 className='secondHeading'>Furniture</h4>
            <span><a href="">Packages</a></span>
            <span><a href="">Living Room</a></span>
            <span><a href="">Bedroom</a></span>
            <span><a href="">Dining</a></span>
            <span><a href="">Home Office</a></span>
          </div>

          <div className="col flex">
            <h4 className='secondHeading'>About</h4>
            <span><a href="">How It Works</a></span>
            <span><a href="">About Feather</a></span>
            <span><a href="">Feather Furniture</a></span>
            <span><a href="">Reviews</a></span>
            <span><a href="">Feather For WeWork</a></span>
          </div>

          <div className="col flex">
            <h4 className='secondHeading'>Help</h4>
            <span><a href="">FAQs</a></span>
            <span><a href="">Contact Us</a></span>
            <span><a href="">Privacy Policy</a></span>
            <span><a href="">Terms</a></span>
            <span><a href="">FloorFound Terms</a></span>
          </div>

          <div className="col">
            <h4 className='secondHeading'>Feather on Social Media</h4>
            <a href=""><BiLogoLinkedin className='socials'/></a>
            <a href=""><BsTwitter className='socials'/></a>
            <a href=""><BsInstagram className='socials'/></a>
            <a href=""><BiLogoFacebook className='socials'/></a>

            <h4 className='secondHeading'>Join our newsletter</h4>
            <small className='email-link'><a href="">Enter your email to join newsletter</a></small>
            <BsFillArrowRightCircleFill/>
            <hr />
          </div>
        </div>

        <hr />
        <div className="container">
          <div className="row">
            <div className="col-8">
            <FaChair className='icon'/>
             DIVANO
            </div>

            <div className="col-4">
              <p><small>Copyright <AiOutlineCopyrightCircle/> 2023 Divano</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer