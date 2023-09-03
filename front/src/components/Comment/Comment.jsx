import { MDBCard, MDBCardBody, MDBCardImage, MDBIcon } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import DOMpurify from 'dompurify';




export default function Comment({ comment, onDeleteComment, pseudo, userId }) {
  const role = useSelector((state) => state.member.role);
  const purifyComment = DOMpurify.sanitize(comment.content)
  return (

   
    <MDBCard className="mb-4 w-100">
      <MDBCardBody>
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex flex-row align-items-center">
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
              alt="avatar"
              width="25"
              height="25"
            />
            <p className="small mb-0 ms-2">{pseudo}</p>
          </div>
          <div className="d-flex flex-row align-items-center">
            {role ==="admin" ? (
              <button
                className=" ml-2 border-0 rounded-circle  cursor: pointer;"
                onClick={() => onDeleteComment(comment.id)}
              >
         <FontAwesomeIcon icon={faEraser} shake />
              </button>
            ) : null}
          </div>
        </div>
        <p dangerouslySetInnerHTML={{ __html: purifyComment }}></p>
      </MDBCardBody>
    </MDBCard>
  );
}
