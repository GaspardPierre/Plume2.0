import React from 'react'
import logo from '../../assets/logo.png'
import './LogoTitleContent.scss'

export default function LogoTitleContent() {
  return (
 
      <> 
      <div className='d-flex justify-content-start logo-container'>

     
    <img src={logo}
     alt='logo' 
     className='logo' />


  <div className=''>
  Plume 2.0
  </div>
  </div>
  </>

  
   
 
  )
}
