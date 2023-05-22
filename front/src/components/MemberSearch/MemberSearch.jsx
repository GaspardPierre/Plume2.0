import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';



export default function MemberSearch({ onSelect }) {

 
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Ici, vous pouvez effectuer une recherche dans votre base de données avec searchTerm
    // et appeler onSelect avec le membre trouvé
  };

  return (
    <div>
      <Form.Control
        type="text"
        placeholder="Tapez l'email ou pseudo du membre"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button onClick={handleSearch}>Valider</Button>
    </div>
  );
}


