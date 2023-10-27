import { useSelector } from 'react-redux';
import DOMpurify from 'dompurify';
import Avatar from '../Avatar/Avatar.jsx';
import './Comment.scss';

export default function Comment({ comment, onDeleteComment, pseudo, userId }) {
  const role = useSelector((state) => state.member.role);
  const purifyComment = DOMpurify.sanitize(comment.content);

  return (
    <div className='d-flex justify-content-start mobile comment-content  '>
      <div className="avatar-container ">
        <Avatar pseudo={pseudo} />
        <div className="pseudo-container ">
        <p className="small-font mb-0 ms-2 fw-bold">{pseudo}</p>
        </div>
  
      </div>
      <div className="comment-bubble   ">
     
        <div className=''>{purifyComment}</div>
      </div>
    </div>
  );
}
