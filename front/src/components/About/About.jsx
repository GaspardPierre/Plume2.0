import React from 'react'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCard,
  MDBCardBody
  
} from 'mdb-react-ui-kit';

export default function About() {
  return (
    <MDBContainer className="my-5">
      <MDBRow>
        <MDBCol md="6">
          <MDBCardImage src="author.jpg" alt="Author" circle size="xl" />
        </MDBCol>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <h5 className="card-title">À propos de moi</h5>
              <p className="card-text">
                Je m'appelle [Nom de l'auteur] et je suis [profession]. J'ai
                travaillé dans [domaine] pendant [nombre d'années] ans et j'ai
                acquis une solide expérience dans [compétences]. Dans mon temps
                libre, j'aime [loisirs].
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
  
}
