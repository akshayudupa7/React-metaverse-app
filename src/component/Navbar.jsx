import React from 'react'
import "./Navbar.css";
import { BsTextRight } from "react-icons/bs";
import {TbBrandMeta} from 'react-icons/tb';



 const Navbar = () => {
  return (
     <div >
  <nav class="navbar navbar-expand-lg  ">
  <div class="container-fluid ">
    
  <a href='/#' className='navbar-brand'> <TbBrandMeta></TbBrandMeta></a>
      
   <BsTextRight class="navbar-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"></BsTextRight>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
      <li class="nav-item ">
          <a class="nav-link" href="/#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#">Community</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#">Event</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#">Contact</a>
        </li>
     
      </ul>
   
    </div>
  </div>
</nav>

   </div>
  )
}
export default Navbar