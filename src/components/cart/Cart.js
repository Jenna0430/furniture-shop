import React from 'react'
import "./cart.css"
import Card from '../card/Card'

const Cart = () => {
  return (
    <div className="cart container">

      <div className="row">
        <div className="heading col">
          <h1 className='secondHeading'>Our Featured </h1>
          <h1 className='secondHeading'>Products</h1>
        </div>

        <div className="button-group col">
        <button type="button" class="button pl-4"><a href="#home">All</a></button>
        <button type="button" class="button pl-4"><a href="#home">Chairs</a></button>
        <button type="button" class="button"><a href="#home">Sofa</a></button>
        <button type="button" class="button"><a href="#home">Tables</a></button>
        <button type="button" class="button"><a href="#home">Others</a></button>
        </div>
      </div>
        

        <div className="container">
          <div className="row gx-5">
            <div className="col-3">
              <Card/>
            </div>

            <div className="col-3">
            <Card/>
            </div>

            <div className="col-3">
            <Card/>
            </div>
          </div>
<br />
          <div className="row gx-5">
          <div className="col-3">
            <Card/>
            </div>

            <div className="col-3">
            <Card/>
            </div>

            <div className="col-3">
            <Card/>
            </div>
        </div>
            
          </div>
        </div>
  )
}

export default Cart