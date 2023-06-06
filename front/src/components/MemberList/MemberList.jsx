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
  const dispatch = useDispatch();
  const onRoleChange = useCallback((id, role) => {
    dispatch(updateMemberRole({ id, role }));
  }, [dispatch]);
  

  return (
    <div>
      {members && members.length 
        ? members.map((member) => (
            <ListGroup  as ="ul" key={member.id}>
              <ListGroup.Item  className={`d-flex  justify-content-between ${member.id=== selectedMemberId ? 'active' : ''}`}> <div className='bold' >Pseudo :</div> {member.pseudo} <div className='bold'>Email :</div> {member.email} <div className='bold'>    
       Rôle :</div> {member.role}   
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
