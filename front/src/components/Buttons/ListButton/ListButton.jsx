import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from '@fortawesome/free-solid-svg-icons';
import './ListButton.scss';


export default function ListButton( {OnGetWorkList}) {
  return (
    <button onClick={OnGetWorkList}
    className="nav_button" >
    <FontAwesomeIcon
     icon={faList} 
     color="rgb(224, 176, 72)" 
     size="2x"
      /> Liste des oeuvres
    </button>
  
  )
}

