import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../reducers/member';
import './MenuToogler.scss';

export default function MenuToogler() {
  const [showMenu, setShowMenu] = useState(false);
  const isLogged = useSelector((state) => state.member.role);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleClose = () => setShowMenu(false);
  const handleShow = () => setShowMenu(true);

  return (
    <>
    
      {isLogged !== null ? (
        <Offcanvas show={showMenu} onHide={handleClose} className="">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Link to="#" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt mx-3"></i>
              Déconnexion
            </Link>
            <Link to="/about">A propos</Link>
            <Link to="/poems">Poèmes</Link>
          </Offcanvas.Body>
        </Offcanvas>
      ) : (
        <Offcanvas show={showMenu} onHide={handleClose} className="">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Link to="/signin" className='p-3'>S'inscrire</Link>
            <Link to="/login" className='p-3'>Se connecter</Link>
            <Link to="/about" className='p-3'>A propos</Link>
            <Link to="/poems" className='p-3'>Poèmes</Link>
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </>
  );
}
