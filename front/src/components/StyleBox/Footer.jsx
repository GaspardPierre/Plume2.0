import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss'



import './Footer.scss'

export default function Footer() {
  return (
    <div className='bg-four w-100  m-0  shadow-md '>
         <div className='d-flex justify-content-around second mb- py-0 '>
            <span className='font-custom py-5'>
            Pierre Dillard © 2023
                </span>
                <span>
                <FontAwesomeIcon icon={faEnvelopeOpen}
                 size='xl'/>
                    </span>
                    <span>
                    <FontAwesomeIcon icon={faFacebookSquare}
                    size='xl' />

                    </span>
        </div>
        </div>
  )
}
