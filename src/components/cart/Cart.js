import React from 'react'

const Cart = () => {
  return (
    <div className="cart container">
        <div className="heading">
          <h1>Our Featured Products</h1>
        </div>

        <div className="button-group">
        <button type="button" class="btn"><a href="#">All</a></button>
        <button type="button" class="btn"><a href="#">Chairs</a></button>
        <button type="button" class="btn"><a href="#">Sofa</a></button>
        <button type="button" class="btn"><a href="#">Tables</a></button>
        <button type="button" class="btn"><a href="#">Others</a></button>
        </div>
    </div>
  )
}

export default Cart