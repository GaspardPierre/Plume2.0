import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ListGroup } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { fetchComments, addComment, deleteComment } from"../../reducers/comment";
import CommentForm from "../CommentForm/CommentForm";
import "./Poem.scss";

export default function Poem({}) {
  const navigate = useNavigate();
  const { id } = useParams();
  const poems = useSelector((state) => state.work.works);
  const poem = poems.find((poem) => poem.id === parseInt(id));
  if (!poem) {
    return <div>Poème introuvable</div>;
  }
  const pseudo = useSelector((state) => state.member.pseudo);
  const role = useSelector((state) => state.member.role);
  console.log("pseudo:", pseudo)
  if (!pseudo) {
    navigate("/login");
  };

  // COMMENT STATE
  const comments = useSelector((state) => state.comment.comments) || [];
  console.log("Commentaires récupérés :", comments);
  const dispatch = useDispatch();
  const handleAddComment = (comment) => {
   dispatch(addComment(comment));
  };

useEffect(() => {
  dispatch(fetchComments());
}, [dispatch]);

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
                <CommentForm onAddComment={handleAddComment}
                poem={poem} />
                <ListGroup className="comment-container">
                  {comments.map((comment, index) => (
                    <ListGroup.Item key={index}>
                      {pseudo} : {comment}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                {/* Fonctionnalité de notation et commentaires */}
              </Col>
              <Col className="comment-container">
           
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  };

