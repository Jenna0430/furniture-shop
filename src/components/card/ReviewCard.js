import React from 'react'
import {BsFillStarFill} from "react-icons/bs"

const ReviewCard = () => {
  const cardStyle = {
    width: "18rem"
  }

  const reviewContent = [
      {
        id : 'i1',
        image: '',
        fullName: 'Miranda Kenneth',
        message: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      },
      {
        id : 'i2',
        image: '',
        fullName: 'John Snow',
        message: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      },
      {
        id : 'i3',
        image: '',
        fullName: 'Kelly Lindsey',
        message: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      },
  ];


  return (
    
    <div className='reviewCard'>
     {reviewContent.map ((review) => (
    <div class="card" style={{cardStyle}}>
    <div class="card-body">
    <h5 class="card-title"><BsFillStarFill/>
    <BsFillStarFill/>
    <BsFillStarFill/>
    <BsFillStarFill/>
    </h5>
    <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
    
      <p class="card-text">{review.message}</p>
      <a href="#" class="card-link">{review.image}</a>
      <a href="#" class="card-link">{review.fullName}</a>
  
    </div>
    </div>
    ))}

    </div> 
  );
};

export default ReviewCard