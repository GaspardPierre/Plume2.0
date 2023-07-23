import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddWorkButton( { OnShowAddWork }) {
  return ( 
    <button onClick={OnShowAddWork} className="nav_button" >
    
    <FontAwesomeIcon
     icon={faPlus} 
     color="#376D92" 
     size="2x"
      /> Ajouter une oeuvre
    </button>
  
  )
}


