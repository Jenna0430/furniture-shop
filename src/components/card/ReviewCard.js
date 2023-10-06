import React from 'react'

const ReviewCard = () => {
  const cardStyle = {
    width: "18rem"
  }
  return (
    <div className='reviewCard'>
      <div class="card" style={{cardStyle}}>
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
    </div>
 </div>
    </div>
  )
}

export default ReviewCard