import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


export default function MemberModify({ member}) {


  const [pseudo, setPseudo] = useState(member.pseudo);
  const [email, setEmail] = useState(member.email);
  const [role, setRole] = useState(member.role);

  const handleModify = () => {
    // Ici, vous pouvez envoyer les nouvelles informations à votre base de données
  };

  return (
    <div>
      <Form.Label>Pseudo</Form.Label>
      <Form.Control type="text" value={pseudo} onChange={(e) => setPseudo(e.target.value)} />
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Form.Label>Rôle</Form.Label>
      <Form.Control type="text" value={role} onChange={(e) => setRole(e.target.value)} />
      <Button onClick={handleModify}>Valider</Button>
    </div>
  );
}


