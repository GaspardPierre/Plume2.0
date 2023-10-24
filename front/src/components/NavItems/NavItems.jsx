import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './NavItems.scss';

export default function NavItems() {
  return (
    <>
      <Nav className="nav-items" activeKey="/home">
        <Nav.Item className='border-end nav-item-hover'>
          <Link to="/signin" className='font-nav text-uppercase  second cursor-link nav-link'>
            <i className="fas fa-user-plus mx-3"></i> S'inscrire
          </Link>
        </Nav.Item>
        <Nav.Item className='border-end nav-item-hover'>
          <Link to="/login" className='font-nav second text-uppercase  cursor-link nav-link'>
            <i className="fas fa-sign-in-alt mx-3"></i> Se connecter
          </Link>
        </Nav.Item>
        <Nav.Item className='border-end nav-item-hover'>
          <Link to="/about" className='font-nav second text-uppercase  cursor-link nav-link'>
            <i className="fas fa-info-circle mx-3"></i> A propos
          </Link>
        </Nav.Item>
        <Nav.Item className='nav-item-hover'>
          <Link to="/poems" className='font-nav second text-uppercase cursor-link nav-link'>
            <i className="fas fa-feather-alt mx-3"></i> Poèmes
          </Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
