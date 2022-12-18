import React from 'react'
import Childs from './Childs'
import './Box.css'



const BoxData=[
    {
        title:'Virtual Reality',
        para:' simulated 3D environment that enables users to interact with a virtual surrounding in a way that approximates reality. '
    },
    {
        title:'Virtual Reality',
        para:' simulated 3D environment that enables users to interact with a virtual surrounding in a way that approximates reality.'
    },
    {
        title:'Virtual Reality',
        para:' simulated 3D environment that enables users to interact with a virtual surrounding in a way that approximates reality. '
    }
]
const Box = () => {
  return (
    <div className='Box d-flex '>
      <div className='container-fluid'>
       <div className='Box_In'>
       <div className='row mx-auto d-flex Box_2_b '>
         <div className='col-md-12 text-center'>
            <h5 className='gradient_via_text'>The metaverse doesn't compete with the internet</h5>
         </div>
         

        </div> 
       <div className='row'>
         <div className='col-md-12  col-sm-12 d-flex   Box_Inner '>
               {
                BoxData.map((item,index)=>(
                   <Childs title={item.title} para={item.para}index={index}/> 
                ))
               }
         </div>

        </div>
        <div className='row'>
         <div className='col-md-4 text-align-center'>
            <h6 className='Box_heading'>Metaverse technologies</h6>
         </div>
         <div className='col-md-8'>
            <p>This is in part because the metaverse is evolving and partly because many of the tools driving 
            the metaverse are themselves made up of multiple technologies.
            for example, prefers to describe metaverse technologies in terms of "tech themes.</p>
        </div>

        </div>
      </div>
      </div>
    </div>
  )
}
export default Box
