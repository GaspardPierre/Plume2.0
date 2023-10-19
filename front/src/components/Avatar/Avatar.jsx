import React from 'react'

import './Avatar.scss'

export default function Avatar({pseudo}) {
  

    const firstLetterPseudo =pseudo ? pseudo[0].toUpperCase() : 'A'
    console.log(firstLetterPseudo)
  return (

<div className='avatar strong'>
        <span className='font-color fw-bold fs-5'>
        {firstLetterPseudo} 

        </span>
       
    </div>


   
  )
}
