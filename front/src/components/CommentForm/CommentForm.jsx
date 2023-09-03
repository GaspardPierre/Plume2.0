import React, { useState } from 'react';
import { MDBInput, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import RatingStars from '../RatingStars/RatingStars';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CommentForm({ poem, onAddComment }) {
  const [comment, setComment] = useState('');

  // Remove html from the comments 



  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onAddComment({ comment: comment.trim(), poemId: poem.id });
      setComment('');
    }
  };



  return (
    <MDBCard className="mt-3">
      <MDBCardBody>
        <form onSubmit={handleSubmit}>
        <ReactQuill
          label="Votre commentaire"
         theme="snow"
        value={comment}
        onChange={(content) => setComment(content)}
        />
          
          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-primary">
              Poster le commentaire
            </button>
          </div>
        </form>
        <RatingStars poemId={poem.id} />
        <div className="d-flex justify-content-center mt-3">
    
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}
