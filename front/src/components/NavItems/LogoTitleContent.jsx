import { Link } from 'react-router-dom'
import React from 'react'
import logo from '../../assets/logo.png'
import './LogoTitleContent.scss'


export default function LogoTitleContent() {
  return (
 
     
     
      <div className='d-flex justify-content-start logo-container'>

     <Link to="/">

  
    <img src={logo}
     alt='logo' 
     className='logo' />
</Link>

  <div className='title '>
  Plume 2.0
  </div>
  

  </div>
 

  
   
 
  )
}
