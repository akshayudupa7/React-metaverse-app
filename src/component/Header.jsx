import React from 'react';
import './Header.css'
import ai from "./assets/ai.png"

 const Header = () => {
  return (
    <div>
        <div className=' header container'>
        <div className='row m-auto'>
            
            <div className='col-md-5 mx-auto '>
             <img src={ai} className="header_image" alt="brain"/>
                
            </div>
            <div className='col-md-7 mx-auto'>
                 <h5 className='gradient_via_text'>Technology will Change the World</h5>
                <p>The metaverse is a vision of what many in the computer industry believe is the next iteration of 
                the internet: a single, shared, immersive, persistent, 3D virtual space </p>
                 <button className='header_button'>Get Started</button>

                
            </div>
        </div>

        </div>
    </div>
  )
}
export default Header
