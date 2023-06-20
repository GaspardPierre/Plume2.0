
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function HomeButton() {

  return (
    
    <Link to="/"
    className="nav_link" >

    <FontAwesomeIcon
     icon={faHome} 
     color="#376D92" 
     size="2x"
      /> Accueil
    </Link>
  );
}
