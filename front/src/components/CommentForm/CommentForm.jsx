import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import RatingStars from "../RatingStars/RatingStars";


export default function CommentForm({ poem, onAddComment }) {
  const [comment, setComment] = useState("");

  console.log("id du poem dans Comment frm :", poem.id);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onAddComment({ comment: comment.trim(), poemId: poem.id });
      setComment("");
    }
  };

  return (
    <Card className="mt-3">
      <Card.Body>
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <Form onSubmit={handleSubmit} className="mb-3 mb-md-0">
            <Form.Group>
              <Form.Label>Votre commentaire</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Ajoutez un commentaire public..."
              />
            </Form.Group>
<div className="d-flex justify-content-center mt-3">
<Button variant="warning" type="submit">
              Poster le commentaire
            </Button>
      
</div>
       
          </Form>
          <RatingStars poemId={poem.id} />
        </div>
      </Card.Body>
    </Card>
  );
}
