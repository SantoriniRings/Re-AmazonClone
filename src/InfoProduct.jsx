import React from 'react'
import Product from './Product'
import "./InfoProduct.css"

const InfoProduct = (props) => {
  return (
    <div className='container-info'>
        <Product 
        id={props.id}
        title={props.title}
        image={props.image}
        price={props.price}
        rating={props.rating}
        />

        <p>Cupidatat nulla minim nisi eu occaecat. Quis do elit aliqua laboris anim nostrud. Officia tempor sint est nostrud aute aute cillum culpa officia exercitation aliquip. Non fugiat culpa sint laboris laboris nostrud eiusmod laboris dolore officia adipisicing deserunt ex id. Tempor sit tempor esse cupidatat officia occaecat excepteur ex eiusmod laborum aliqua sunt irure. Proident nulla pariatur nostrud commodo minim aliquip laborum.</p>
    </div>
  )
}

export default InfoProduct