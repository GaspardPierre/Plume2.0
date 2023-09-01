import React, { useState } from 'react';
import { MDBInput, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import RatingStars from '../RatingStars/RatingStars';
import EmojiPicker from 'emoji-picker-react';

export default function CommentForm({ poem, onAddComment }) {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onAddComment({ comment: comment.trim(), poemId: poem.id });
      setComment('');
    }
  };

  function onEmojiClick(e, emojiObject) {
    console.log(emojiObject);
    if (emojiObject.emoticon) {
      setComment(comment + emojiObject.emoticon);
    } else {
      console.log("la propriété emoji n'existe pas !!");
    }
  }

  return (
    <MDBCard className="mt-3">
      <MDBCardBody>
        <form onSubmit={handleSubmit}>
          <MDBInput
            label="Votre commentaire"
            textarea
            rows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-primary">
              Poster le commentaire
            </button>
          </div>
        </form>
        <RatingStars poemId={poem.id} />
        <div className="d-flex justify-content-center mt-3">
        <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}
