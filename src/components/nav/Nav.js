import React from 'react'

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
          <span className="navbar-toggler-icon"></span>
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
        
      </div>
    </nav>
    </div>
  )
}

export default Nav