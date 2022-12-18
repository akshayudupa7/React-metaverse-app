import React from 'react'
import './Cards.css'


 const Cards = ({para,image}) => {
  return (
    <div>
     <div class="card">
    <img src={image} class="card-img-top" alt="card_image"/>
    <div class="card-body">
      <p class="card-text">{ para}</p>
    </div>
  </div>
  </div>
  )
}
export default Cards