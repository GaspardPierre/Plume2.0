
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../../reducers/member";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  
  return (
    
    <Link to="/"
    className="nav_link" 
    onClick={handleLogout}>
    <FontAwesomeIcon
     icon={faPowerOff} 
     color="rgb(224, 176, 72)" 
     size="2x"
      /> Déconnexion
    </Link>
  );
}
