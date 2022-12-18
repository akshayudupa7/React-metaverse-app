import React from 'react'
import Cards from './Cards'
import './Card.css'
import box1 from './assets/box_1_img.jpg'
import box2 from './assets/box_2_img.jpg'
import box3 from './assets/box_3_img.jpg'
import box4 from './assets/box_4_img.jpg'
import box5 from './assets/box_5_img.jpg'
 const Card = () => {
  return (
    <div className='container-fluid mx-auto Card'>
    <div className='row Card_main m-auto'>
        <div className='col-md-4 Card1_image Card'>
           <Cards image={box1} para="Metaverse for work collaboration" />
        </div>
        <div className='col-md-4 Card'>
           <Cards  className="Card_verse" image={box2} para="Metaverse for work collaboration"/>
           <Cards image={box3} para="Metaverse for work collaboration"/>
     
        </div>
        <div className='col-md-4 Card'>
           <Cards image={box4} para="Metaverse for work collaboration"/>
           <Cards image={box5} para="Metaverse for work collaboration"/>
        </div>
       
    </div>
   </div>
  )
}
export default Card