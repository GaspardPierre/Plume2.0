import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from '@fortawesome/free-solid-svg-icons';


export default function ListButton() {
  return (
    <Link to="/admin/work/listWork"
    className="nav_link" >
    <FontAwesomeIcon
     icon={faList} 
     color="rgb(224, 176, 72)" 
     size="2x"
      /> Liste des oeuvres
    </Link>
  
  )
}

