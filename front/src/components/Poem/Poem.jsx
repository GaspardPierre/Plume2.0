import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Button, Card, Badge, Row, Col, Fade } from "react-bootstrap";
import {fetchComments,addComment,deleteComment,} from "../../reducers/comment";
import { fetchAverage } from "../../reducers/average";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import RatingStars from "../RatingStars/RatingStars";
import { useMemberState } from "../../hooks/customHooks";
import Header from "../Layout/Header";
import "./Poem.scss";

export default function Poem({ }) {

  const navigate = useNavigate();
  const { id } = useParams();
  const poems = useSelector((state) => state.work.works);
  const poem = poems.find((poem) => poem.id === parseInt(id));
  if (!poem) {
    return <div>Poème introuvable</div>;
  }
  const averageByPoem = useSelector((state) => state.average.averageByPoem);
  const average = averageByPoem[poem.id];
  // MEMBER STATE
  const { pseudo, userId, role } = useMemberState();

  if (!pseudo) {
    navigate("/login");
  }
  // COMMENT STATE
  const comments = useSelector((state) => state.comment.comments) || [];
  const dispatch = useDispatch();
  const [showCommentForm, setShowCommentForm] = useState(false);


  const [error, setError] = useState(null);


  //  adding a comment

  const handleAddComment = useCallback(
    (comment) => {
      dispatch(addComment(comment));
    },
    [dispatch]
  );

  //deleting a comment
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
      setError(error); 
    }
  }, [id, commentDeleted]);

  return (
    <>
      <Header />
      <div className="card-container  justify-content-center flex-column ">
      {error ? (
        <div>Une erreur s'est produite : {error.message}</div>
      ) : (
        <Card
          className="main-card w-xs-100 w-md-75 w-80-lg justify-content-center flex-column"

        >
          
    
            <div className="flex justify-content-around">
            <RatingStars poemId={poem.id} />
          
           

            <h1 className="text-center mb-2 mobile-font">{poem.title}</h1>
          </div>

          <div className="poem">
            <Container className="main-container w-lg-100">
              <Row className="justify-content-center flex-column ">
                <Col className="work-container flex-column">
                  <p className="poem-content  w-md-75 m-0 m-md-4 large-font">{poem.content}</p>
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
                    aria-controls="comment-fade-text" r
                    aria-expanded={showCommentForm}
                    className="show-comments-btn"
                  >
                    Voir les commentaires
                  </Button>

                </Col>
              </Row>
            </Container>
          </div>
        </Card>)}
        <div className="w-xs-100 w-md-75 w-80-lg">
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
        </div>
       
      </div>

    </>
  );
}