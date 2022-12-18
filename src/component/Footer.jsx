import React from 'react'
import './Footer.css'

 const Footer = () => {
  return (
    <div >
        <div className='Footer_heading '>
            <h4  className='gradient_via_text'>When is a full-fledged metaverse coming</h4>
            <button>Request a Demo</button>
        </div>
         <div className='container mt-5 footer_lower'>
            <div className='row'>
                <div className='col-md-4'>
                    <h6>Links</h6>
                    <p>Social Media</p>
                    <p>Contact</p>
                    <p>Counter</p>
                </div>
                <div className='col-md-4'>
                <h6>Company</h6>
                <p>Terms & Condition</p>
                <p>Privacy Policy</p>
                </div>
                <div className='col-md-4'>
                <h6>Get In Touch</h6>
                <p>018-980</p>           
                <p>info@payment</p>   
                  </div>
             
            </div>
         </div>
    </div>
  )
}
export default Footer
