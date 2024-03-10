import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default function SearchBar  () {
  const handleSearch = (e) => {
    e.preventDefault();
    // Implémentez la logique de recherche ici
    console.log('Recherche...');
  };

  return (


 
    <form className="d-flex  justify-content-center   my-3" onSubmit={handleSearch}>
      <div className="input-group w-100  ">
   
        <input
          type="text"
          className="form-control "
          placeholder="Rechercher un poème"
          aria-label="Rechercher un poème"
          aria-describedby="button-search"
        />
           <span className="input-group-text" id="basic-addon1">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
    </form>
  
  );
};


