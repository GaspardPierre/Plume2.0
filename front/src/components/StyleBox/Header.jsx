import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import { useSelector, useDispatch} from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import LogoTitleContent from '../NavItems/LogoTitleContent';
import NavItems from '../NavItems/NavItems';
import Title from './Title';
import './Header.scss';


export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShow = () => setShowMenu(true);
  const handleClose = () => setShowMenu(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const user = token ? jwtDecode(token) : {};
  const { role, pseudo } = user;
  console.log("role dans header ", role);


  const handleLogout = () => {
    dispatch(logout()).then(() => {
      localStorage.removeItem('token');  
      navigate('/');
    });
  };

  return (
    <>
      {role ? (
        <div className='d-flex align-items-start top-header justify-content-end'>
          <header className='d-flex w-head-desktop bg-gradient-left-right shadow-md px-3 sticky-top'>
            <nav>
              <div className='second d-flex justify-content-start w-100 h-25'>
                <div className='nav-items-container d-flex justify-content-between'>
                  <LogoTitleContent />
                  <button onClick={handleShow} className="btn btn-primary d-lg-none bg-gradient-left-right mx-4">
                    <i className="fas fa-bars"></i>
                  </button>
                  <Offcanvas show={showMenu} onHide={handleClose} className="bg-burger">
                    <Offcanvas.Header closeButton className='bg-burger'>
                      <Offcanvas.Title className='custom-menu title second line bg-burger'>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='d-flex flex-column align-items-start justify-content-start bg-burger'>
                      <Link className='custom-menu second cursor-link line py-3' onClick={handleLogout} to="#">
                        <i className="fas fa-sign-out-alt"></i> Déconnexion ({pseudo})
                      </Link>
                      <Link className='custom-menu second cursor-link line py-3' to="/about">
                        <i className="fas fa-info-circle"></i> À propos
                      </Link>
                      <Link className='custom-menu second cursor-link line py-3' to="/poems">
                        <i className="fas fa-feather-alt"></i> Poèmes
                      </Link>
                      {role === 'admin' && (
                        <Link className='custom-menu second cursor-link line py-3' to="/admin">
                          <i className="fas fa-tools"></i> Administration
                        </Link>
                      )}
                    </Offcanvas.Body>
                  </Offcanvas>
                  <div className="d-none d-lg-block">
                    <NavItems />
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>
      ) : (
        <div className='d-flex align-items-start top-header justify-content-end'>
          <header className='d-flex w-head-desktop bg-gradient-left-right shadow-md px-3 sticky-top'>
            <nav>
              <div className='second d-flex justify-content-start w-100 h-25'>
                <div className='nav-items-container d-flex justify-content-between'>
                  <LogoTitleContent />
                  <button onClick={handleShow} className="btn btn-primary d-lg-none bg-gradient-left-right mx-4">
                    <i className="fas fa-bars"></i>
                  </button>
                  <Offcanvas show={showMenu} onHide={handleClose} className="bg-burger">
                    <Offcanvas.Header closeButton className='bg-burger'>
                      <Offcanvas.Title className='custom-menu title second bg-burger line'>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='d-flex flex-column align-items-start justify-content-start bg-burger'>
                      <Link className='custom-menu second cursor-link line p-3' to="/signin">
                        <i className="fas fa-user-plus"></i> S'inscrire
                      </Link>
                      <Link className='custom-menu second cursor-link line p-3' to="/login">
                        <i className="fas fa-sign-in-alt"></i> Se connecter
                      </Link>
                      <Link className='custom-menu second cursor-link line p-3' to="/about">
                        <i className="fas fa-info-circle"></i> À propos
                      </Link>
                      <Link className='custom-menu second cursor-link line p-3' to="/poems">
                        <i className="fas fa-feather-alt"></i> Poèmes
                      </Link>
                    </Offcanvas.Body>
                  </Offcanvas>
                  <div className="d-none d-lg-block">
                    <NavItems />
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>
      )}
    </>
  );
}