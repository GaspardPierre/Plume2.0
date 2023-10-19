import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';
import './MenuToogler.scss'

export default function MenuToogler() {

  return (

  <>
          <Offcanvas show={showMenu}
                     onHide={handleClose}
                     className="">
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                      <Link
                        to="/signin"
                      >
                        S'inscrire
                      </Link>
                      <Link
                        to="/login"
                      >
                        Se connecter
                      </Link>
                      <Link
                        to="/about"
                      >
                        A propos
                      </Link>
                      <Link
                        to="/poems"
                      >
                        Poèmes
                      </Link>
                      </Offcanvas.Body>
                   
                    </Offcanvas>


</>
  )
}
