import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddWorkButton() {
  return (
    <Link to="/admin/work/addWork"
    className="nav_link" >
    <FontAwesomeIcon
     icon={faPlus} 
     color="rgb(224, 176, 72)" 
     size="2x"
      /> Ajouter une oeuvre
    </Link>
  
  )
}


