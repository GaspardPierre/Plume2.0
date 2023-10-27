import React from 'react';
import { Link, useLocation , useNavigate}  from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { useSelector, useDispatch} from 'react-redux';
import { logout } from '../../reducers/member'
import './NavItems.scss';

export default function NavItems() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const isLogged = useSelector((state) => state.member.role);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout ())
    navigate('/')

  }

  return (
    <>
      {isLogged !== null ? (
        <Nav className="nav-items" activeKey="/home">
          <Nav.Item className={`nav-item-hover ${isActive('/') ? 'active-tab' : ''}`}>
            <Link to="#" className='font-nav text-uppercase second cursor-link nav-link'
            onClick={ handleLogout }>
              <i className="fas fa-sign-out-alt mx-3"></i> Déconnection
            </Link>
          </Nav.Item>
          <Nav.Item className={`nav-item-hover ${isActive('/about') ? 'active-tab' : ''}`}>
            <Link to="/about" className='font-nav second text-uppercase cursor-link nav-link'>
              <i className="fas fa-info-circle mx-3"></i> À propos
            </Link>
          </Nav.Item>
          <Nav.Item className={`nav-item-hover ${isActive('/poems') ? 'active-tab' : ''}`}>
            <Link to="/poems" className='font-nav second text-uppercase cursor-link nav-link'>
              <i className="fas fa-feather-alt mx-3"></i> Poèmes
            </Link>
          </Nav.Item>
        </Nav>
      ) : (
        <Nav className="nav-items" activeKey="/home">
           <Nav.Item className={`border-end nav-item-hover ${isActive('/signin') ? 'active-tab' : ''}`}>
          <Link to="/signin" className='font-nav second text-uppercase cursor-link nav-link'>
            <i className="fas fa-sign-in-alt mx-3"></i> S'inscrire
          </Link>
        </Nav.Item>
        <Nav.Item className={`border-end nav-item-hover ${isActive('/login') ? 'active-tab' : ''}`}>
          <Link to="/login" className='font-nav second text-uppercase cursor-link nav-link'>
            <i className="fas fa-sign-in-alt mx-3"></i> Se connecter
          </Link>
        </Nav.Item>
        <Nav.Item className={`border-end nav-item-hover ${isActive('/about') ? 'active-tab' : ''}`}>
          <Link to="/about" className='font-nav second text-uppercase cursor-link nav-link'>
            <i className="fas fa-info-circle mx-3"></i> À propos
          </Link>
        </Nav.Item>
        <Nav.Item className={`nav-item-hover ${isActive('/poems') ? 'active-tab' : ''}`}>
          <Link to="/poems" className='font-nav second text-uppercase cursor-link nav-link'>
            <i className="fas fa-feather-alt mx-3"></i> Poèmes
          </Link>
        </Nav.Item>
      </Nav>
      )}
    </>
  );
}
