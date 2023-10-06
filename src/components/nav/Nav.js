import React from 'react'
import {FaChair} from "react-icons/fa"
import {FiMenu} from "react-icons/fi"
import "./nav.css"

const Nav = () => {
  return (
    <div className='nav-bar'>
       <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light ps-5">
       <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" ><FiMenu className='icon'/></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a class="nav-link" aria-current="page" href="index.html"
                >SHOP</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="about.html"
                >OFFERS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="about.html#contact"
                >CATEGORIES</a>
            </li>
          </ul>
        </div>

        <a class="navbar-brand" href="index.html">
          <FaChair className='icon'/>
          DIVANO
        </a>
      </div>
    </nav>
    </div>
  )
}

export default Nav