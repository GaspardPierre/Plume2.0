import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Toast from "react-bootstrap/Toast";
import Button from "react-bootstrap/Button";


export default function Comment({ comment, onDeleteComment, pseudo, userId }) {
  return (
    <Toast position="top-start">
    <Toast.Header closeButton={false}>
      <strong className="me-auto">{pseudo}</strong>
      <small>Il y a X minutes</small>
      {comment.member_id === userId ? (
        <Button
          ClassName="btn-delete"
          variant="danger"
          onClick={() => onDeleteComment(comment.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      ) : null}
    </Toast.Header>
    <Toast.Body>{comment.content}</Toast.Body>
  </Toast>
);
}