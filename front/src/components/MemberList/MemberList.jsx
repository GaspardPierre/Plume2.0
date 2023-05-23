import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";
import './MemberList.scss';

export default function MemberList(onDeleteMember) {
  const members = useSelector((state) => state.member.members);
  console.log(`members: ${JSON.stringify(members)}`);

  return (
    <div>
      {members && members.length 
        ? members.map((member) => (
            <ListGroup key={member.id}>
              <ListGroup.Item variant='info'> <strong className='bold'>Pseudo :</strong> {member.pseudo} <strong className='bold'>Email :</strong> {member.email} <strong className='bold'>Rôle :</strong> {member.role}   <Button
          ClassName="btn-delete"
          variant="info"
          onClick={() => onDeleteMember(member.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button> </ListGroup.Item>
            </ListGroup>
          ))
        : <p>Pas de membres</p>  
      }
    </div>
  );
}
