import React from 'react'
import './Virtual.css'
import virtual from './assets/possibility.png'

const Virtual = () => {
  return (
    <div className='virtual '>
        <div className='row virtual_main m-auto'>
            <div className='col-md-6 virtual_in'>
                <h4 className='gradient_via_text'>How should businesses prepare for the metaverse</h4>
                <p>Creating successful metaverse work environments will require far more than
                 grafting existing office spaces and protocols onto virtual spaces.</p>
                <p><span>Enhancing teamwork and collaboration</span></p>
            </div>
            <div className='col-md-6 '>
            <img src={virtual}  alt="ss"/> 
            </div>

        </div>
    </div>
  )
}
export  default Virtual
