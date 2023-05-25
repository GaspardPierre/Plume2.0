import React ,{ useState, useCallback }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateMemberRole } from '../../reducers/member';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"; 
import ListGroup from 'react-bootstrap/ListGroup';
import MemberModal from '../MemberModal/MemberModal';
import './MemberList.scss';



export default function MemberList({onDeleteMember}) {
  const members = useSelector((state) => state.member.members);
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  console.log(`members: ${JSON.stringify(members)}`);
  const dispatch = useDispatch();
  const onRoleChange = useCallback((id, role) => {
    dispatch(updateMemberRole({ id, role }));
  }, [dispatch]);
  

  return (
    <div>
      {members && members.length 
        ? members.map((member) => (
            <ListGroup  as ="ul" key={member.id}>
              <ListGroup.Item as ="li" className={`d-flex flex-column flex-md-row justify-content-between ${member.id=== selectedMemberId ? 'active' : ''}`}> <strong className='bold' >Pseudo :</strong> {member.pseudo} <strong className='bold'>Email :</strong> {member.email} <strong className='bold'>    
       Rôle :</strong> {member.role}   
       <div className='action-button'> 
       <MemberModal member={member} onRoleChange={onRoleChange} />
      
      <FontAwesomeIcon icon={faTimesCircle}
      className="btn-delete"
      variant="info"
      onClick={() => onDeleteMember(member.id)} />
       </div>
      
         </ListGroup.Item>
            </ListGroup>
          ))
        : <p>Pas de membres</p>  
      }
    </div>
  );
}
