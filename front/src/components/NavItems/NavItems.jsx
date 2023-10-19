import React from 'react';
import { Link } from 'react-router-dom'; // Importez Link de react-router-dom
import Nav from 'react-bootstrap/Nav';
import './NavItems.scss';

export default function NavItems() {
  return (
    <>
      <Nav className="nav-items" activeKey="/home">
        <Nav.Item className='border-end nav-item-hover'>
          <Link to="/signin" className='font-nav second cursor-link nav-link'>S'inscrire</Link>
        </Nav.Item>
        <Nav.Item className='border-end nav-item-hover'>
          <Link to="/login" className='font-nav second cursor-link nav-link'>Se connecter</Link>
        </Nav.Item>
        <Nav.Item className='border-end nav-item-hover'>
          <Link to="/about" className='font-nav second cursor-link nav-link'>A propos</Link>
        </Nav.Item>
        <Nav.Item className='nav-item-hover'>
          <Link to="/poems" className='font-nav second cursor-link nav-link'>Poèmes</Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
