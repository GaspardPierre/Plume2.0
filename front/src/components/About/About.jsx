import React from 'react'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCard,
  MDBCardBody,
  MDBTypography,
  MDBCardTitle,
  MDBCardText,
  MDBRipple

} from 'mdb-react-ui-kit';
import auteur from '../../assets/auteur.jpg';
import Header from '../Layout/Header';


import './About.scss'

export default function About() {
  return (
    <> 
    <Header />
 
<div className='container border mt-5 custom ' >
   
        <MDBContainer className='d-flex justify-content-center justify-content-md-center align-items-center vh-80 '>
      <MDBRow className='d-flex justify-content-center'>
        <MDBCol className="mx-auto" style={{ maxWidth: '540px' }}>
          <MDBCard className='p-5'>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCardImage src={auteur} className='mx-1 rounded-circle ' />
              <a href='#!'>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a> </MDBRipple>
          
            <MDBCardBody>
              <MDBCardTitle className='text-center'>À propos de l'auteur</MDBCardTitle>
              <MDBCardText className='mx-5'>
                <MDBTypography tag="p" variant="body1">
                 Pierre Dillard est un auteur prolifique et engagé. Ces thêmes de prédilections sont la sérenité, le rêve, la paix, et surtout son amour pour Dieu.<div className=""></div>
                </MDBTypography>

              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol >
          {/* Autres informations ou composants */}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
   
    </>
  );
    
}
