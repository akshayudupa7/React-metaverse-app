import React from 'react'
import Childs from './Childs'
import './Middle.css';
import meta from './assets/meta.jpg'

let ChildData=[
    {
        title:'The metaverse is described as the inevitable evolution',
        para:'Imagine a virtual world where billions of people live, work, shop, learn and interact with each other'
    },
    {
        title:'The metaverse is described as the inevitable evolution',
        para:'Imagine a virtual world where billions of people live, work, shop, learn and interact with each other'
    },
    {
        title:'The metaverse is described as the inevitable evolution',
        para:'Imagine a virtual world where billions of people live, work, shop, learn and interact with each other'
    }
]


const Middle = () => {
   
  return (
    <div className=''>
    <div className='middle_main  '>
    <div className="middle_content">
              {
                ChildData.map((item,index)=>(
                  
                  <Childs className="hh" title={item.title} para={item.para} key={index}/>
                   
                ))
              }
    </div>
    <div className='Middle_image'>
    <img src={meta} className="header_image" alt="meta"/>
    </div>

    </div>
    </div>

  )
}
export default Middle