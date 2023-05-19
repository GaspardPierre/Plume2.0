import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  fetchComments,
  addComment,
  deleteComment,
} from "../../reducers/comment";
import { fetchAverage } from "../../reducers/average";
import Comment from "../Comment/Comment";
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
  const dispatch = useDispatch();

  const handleAddComment = useCallback((comment) => {
    dispatch(addComment(comment));
  },[dispatch]);

  // ...handleDeleteComment
  const [commentDeleted, setCommentDeleted] = useState(false); // to force useEffect to reload comments
  const onDeleteComment = useCallback((id) => {
    dispatch(deleteComment({ id: parseInt(id) }));
    setCommentDeleted(true);
  },[dispatch]);

  useEffect(() => {
    try { 
    dispatch(fetchComments(id));
    dispatch(fetchAverage());
    setCommentDeleted(false);
  } catch (error) {
     console.log(error) ;
  }
  }, [ id, commentDeleted]);

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
                {comments.map((comment, index) => (
                 <Comment
                 comment ={comment} 
                  onDeleteComment={onDeleteComment}
                  pseudo={pseudo}
                  userId={userId}
                  key={comment.id}
                 />
                ))}
             
              {/* Fonctionnalité de notation et commentaires */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
