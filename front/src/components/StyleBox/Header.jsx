import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import LogoTitleContent from '../NavItems/LogoTitleContent';
import NavItems from '../NavItems/NavItems';
import Title from './Title';
import './Header.scss';


export default function Header() {

  const [showMenu, setShowMenu] = useState(false);
  const handleShow = () => setShowMenu(true);
  const handleClose = () => setShowMenu(false);


  return (


    <div className=' d-flex  align-items-start top-header justify-content-end   '>
      <header className='d-flex w-head-desktop bg-third rounded shadow-md mt-2 px-3  sticky-top '>

        <nav>
          <div>
            <div className='second d-flex justify-content-start w-100 h-25  '>

              <div className='nav-items-container d-flex  justify-content-between '>
                <LogoTitleContent />
                {/* Button  pour afficher le menu sur mobile */}
                <button onClick={handleShow} className="btn btn-primary d-lg-none bg-third mx-4 ">  <i className="fas fa-bars"></i></button>
                {/* Menu pour les mobiles */}
                <div className=''>


                  <Offcanvas show={showMenu}
                    onHide={handleClose}
                    className="bg-four ">
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title className='custom-menu title second  line'>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='d-flex flex-column align-items-start justify-content-start  '>
                      <Link className='custom-menu second cursor-link line' to="/signin">
                        <i className="fas fa-user-plus"></i> S'inscrire
                      </Link>
                      <Link className='custom-menu second cursor-link line' to="/login">
                        <i className="fas fa-sign-in-alt mr-2"></i> Se connecter
                      </Link>
                      <Link className='custom-menu second cursor-link line' to="/about">
                        <i className="fas fa-info-circle"></i> A propos
                      </Link>
                      <Link className='custom-menu second cursor-link line' to="/poems">
                        <i className="fas fa-feather-alt"></i> Poèmes
                      </Link>
                    </Offcanvas.Body>
                  </Offcanvas>
                </div>
                {/* Menu pour les desktops */}
                <div className="d-none d-lg-block">
                  <NavItems />
                </div>
              </div>
            </div>

          </div>

        </nav>

      </header>




    </div>


  )
}

