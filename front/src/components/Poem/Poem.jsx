import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ListGroup, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  fetchComments,
  addComment,
  deleteComment,
  resetComment,
} from "../../reducers/comment";
import { fetchAverage } from "../../reducers/average";
import CommentForm from "../CommentForm/CommentForm";
import "./Poem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Poem({}) {
  const navigate = useNavigate();
  const { id } = useParams();

  const poems = useSelector((state) => state.work.works);
  const poem = poems.find((poem) => poem.id === parseInt(id));
  console.log("poem:", poem);
  if (!poem) {
    return <div>Poème introuvable</div>;
  }
  const averageByPoem = useSelector((state) => state.average.averageByPoem);
  const average = averageByPoem[poem.id];
  const pseudo = useSelector((state) => state.member.pseudo);
  const userId = useSelector((state) => state.member.id);
  const role = useSelector((state) => state.member.role);

  if (!pseudo) {
    navigate("/login");
  }

  // COMMENT STATE
  const comments = useSelector((state) => state.comment.comments) || [];
  console.log("Commentaires récupérés :", comments);

  const dispatch = useDispatch();
  const handleAddComment = (comment) => {
    console.log("LES comments de POEM :", comment);
    dispatch(addComment(comment));
  };

  // ...handleDeleteComment
  const [commentDeleted, setCommentDeleted] = useState(false); // Ajoute cet état

  const onDeleteComment = (id) => {
    dispatch(deleteComment({ id: parseInt(id) }));
    setCommentDeleted(true);
  };

  useEffect(() => {
    dispatch(fetchComments(id));
    dispatch(fetchAverage());
    setCommentDeleted(false);
  }, [dispatch, id, commentDeleted]);

  return (
    <>
      <header className="header-container container mb-8">
        <div className="row">
          <h1 className="text-center mb-2">{poem.title}</h1>
        </div>
      </header>
      <div className="poem">
        <Container className="main-container">
          <Row className="justify-content-center">
            <Col className="work-container">
              <p className="poem-content">{poem.content}</p>
              <p className="poem-author">{poem.author}</p>
            </Col>

            <Col className="comment-rating-container">
              <CommentForm
                onAddComment={handleAddComment}
                poem={poem}
                average={average}
              />
              <ListGroup className="comment-container">
                {comments.map((comment, index) => (
                  <ListGroup.Item
                    key={index}
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div>
                      <strong>{pseudo}</strong> : <br />
                      {comment.content}
                    </div>
                    {comment.member_id === userId ? (
                      <Button
                        ClassName="btn-delete"
                        variant="warning"
                        onClick={() => onDeleteComment(comment.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    ) : null}
                  </ListGroup.Item>
                ))}
              </ListGroup>
              {/* Fonctionnalité de notation et commentaires */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
