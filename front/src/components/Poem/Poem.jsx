import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from "react-bootstrap/Fade";
import {
  fetchComments,
  addComment,
  deleteComment,
} from "../../reducers/comment";
import { fetchAverage } from "../../reducers/average";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import LogoutButton from "../Buttons/LogoutButton/LogoutButton";
import HomeButton from "../Buttons/HomeButton/HomeButton";
import { Card,Badge } from "react-bootstrap";
import "./Poem.scss";

// Main component for displaying a single poem

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
  const [showCommentForm, setShowCommentForm] = useState(false);


  // Function to handle adding a comment

  const handleAddComment = useCallback(
    (comment) => {
      dispatch(addComment(comment));
    },
    [dispatch]
  );

 // Function to handle deleting a comment
  const [commentDeleted, setCommentDeleted] = useState(false); // to force useEffect to reload comments
  const onDeleteComment = useCallback(
    (id) => {
      dispatch(deleteComment({ id: parseInt(id) }));
      setCommentDeleted(true);
    },
    [dispatch]
  );

  // Fetch comments and average rating when component mounts or a comment is deleted

  useEffect(() => {
    try {
      dispatch(fetchComments(id));
      dispatch(fetchAverage());
      setCommentDeleted(false);
    } catch (error) {
      console.log(error);
    }
  }, [id, commentDeleted]);

  return (
    <>
      <header className="d-flex justify-content-around mt-3 w60">
        <HomeButton />

        <LogoutButton />
      </header>
      <div className="card-container">
        <Card
          className="main-card w-50 justify-content-center flex-column w-sm-90"r
              
        >
          <div className="row">
            <h1 className="text-center mb-2">{poem.title}</h1>
          </div>

          <div className="poem">
            <Container className="main-container">
              <Row className="justify-content-center flex-column ">
                <Col className="work-container flex-column">
                  <p className="poem-content">{poem.content}</p>
                  <span className="poem-author d-flex justify-content-center">
                    <h3>
                      <Badge className="mt-2" pill bg="secondary">
                        {poem.author}
                      </Badge>
                    </h3>
                  </span>
                </Col>

                <Col className="comment-rating-container">
                  <CommentForm
                    onAddComment={handleAddComment}
                    poem={poem}
                    average={average}
                  />
                  <Button
                    onClick={() => setShowCommentForm(!showCommentForm)}
                    aria-controls="comment-fade-text"r
                    aria-expanded={showCommentForm}
                    className="show-comments-btn"
                  >
                    Voir les commentaires
                  </Button>
                  <Fade in={showCommentForm}>
                    <div id="comment-fade-text">
                      {comments.map((comment, index) => (
                        <Comment
                          comment={comment}
                          onDeleteComment={onDeleteComment}
                          pseudo={pseudo}
                          userId={userId}
                          key={comment.id}
                        />
                      ))}
                    </div>
                  </Fade>

                  {/* Fonctionnalité de notation et commentaires */}
                </Col>
              </Row>
            </Container>
          </div>
        </Card>
      </div>
    </>
  );
  
}