import React from 'react';


export default function MemberList() {

  // Ici, vous pouvez récupérer la liste des membres depuis votre base de données
  const members = [];

  return (
    <div>
      {members.map((member) => (
        <div key={member.id}>
          <p>{member.pseudo}</p>
          <p>{member.email}</p>
        </div>
      ))}
    </div>
  );
}


