import React, { useState, useEffect ,useMemo} from 'react'
import './StyleBox.scss'
import Footer from './Footer'
import Title from './Title'
import './Footer.scss'






export default function StyleBox({ children }) {





  return (
    <> 


   
<Title />


<div className='d-flex flex-column  align-items-center w-100 '>


          
       
       
        <div className='main-section d-flex w-75  align-items-center my-3 '>
       
      
           {children}

       
   
    
    
        </div>

        </div>
        <div className=' w-100 m-0 f'>
<Footer 
    />  
</div>
      
  

   
    
   
   
      



    </>

  )
}
