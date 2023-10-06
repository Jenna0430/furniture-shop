import React from 'react'
import image1 from "../../assets/images/chairImage4.jpg"

const Card = () => {

  const myStyles = {
        width: "25rem"
  };
  return (
    <div className="card">
      <div class="card h-100" style={{myStyles}}>
      <img src={image1} class="card-img-top img-fluid" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    </div>
  )
}

export default Card