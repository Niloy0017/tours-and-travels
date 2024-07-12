import React from 'react'

export const Tourcard = (props) => {

  const { image, name, info, price } = props.tour;

  return (
    <div className='card'>
        <img src={image} className='tour-image' ></img>
        <div className='tour-name'> {name} </div>
        <div className='tour-info'> {info} </div>
        <div className='tour-price'> € {price} </div>
        <button className='tour-btn'> kinbo </button>
    </div>
  )
}



