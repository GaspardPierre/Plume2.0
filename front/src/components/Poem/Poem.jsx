import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchComments,
  addComment,
  deleteComment,
  resetComment
} from "../../reducers/comment";
import { fetchWorks } from "../../reducers/work";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import RatingStars from "../RatingStars/RatingStars";
import { useMemberState } from "../../hooks/customHooks";
import Share from "../Share/Share";
import poemBg from "../../assets/poem.png";
import DOMPurify from "dompurify";

import "./Poem.scss";

export default function Poem() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { works, status, error } = useSelector((state) => state.work);
  const comments = useSelector((state) => state.comment.comments) || [];
  const { pseudo, userId, role } = useMemberState();
  const [showComments, setShowComments] = useState(false);
 

  useEffect(() => {
    // Réinitialiser et recharger les commentaires à chaque changement d'ID de poème
    dispatch(fetchComments(id));
  
    // Fonction de nettoyage pour réinitialiser les commentaires
    return () => {
      dispatch(resetComment()); // Assurez-vous d'avoir une action 'resetComment' dans votre slice Redux
    };
  }, [id, dispatch]);
  

  const poem = works.find((p) => p.id === parseInt(id));

  if (status === 'loading') {
    return <div>Chargement...</div>;
  }

  if (status === 'failed') {
    return <div>Erreur lors du chargement : {error}</div>;
  }

  if (!poem) {
    return <div>Une erreur est survenue, le poème demandé est introuvable.</div>;
  }

  const handleAddComment = useCallback(
    (comment) => {
      dispatch(addComment(comment));
    },
    [dispatch]
  );

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <>
      {error ? (
        <div>Une erreur s'est produite : {error.message}</div>
      ) : (
        <div className="container my-5 poem-container" style={{ backgroundImage: `url(${poemBg})` }}>
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-5 poem-section ">
              <div className="card poem-card border-0 bg-custom">
                <div className="card-body">
                  <div className="d-flex justify-content-center rating-container">
                    <RatingStars poemId={poem.id} />
                    <div className="text-center">
                      <h2 className="card-title mb-3 font-custom">{poem.title}</h2>
                      <h6 className="text-muted author-name font-color py-1">{poem.author}</h6>
                    </div>
                  </div>
                  {poem.urlImage && (
                    <div className="d-flex justify-content-center align-items-end h-40">
                      <img src={poem.urlImage} className="img-fluid poem-image mb-3" alt="Poem" />
                    </div>
                  )}
                  <p className="card-text poem-content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(poem.content) }}></p>
                  <div className="d-flex justify-content-center">
                    <Share poemId={poem.id} />
                  </div>
                </div>
              </div>
            </div>
            {/* COMMENT SECTION */}
            <div className="col-lg-5 col-md-12 comments-section">
              <div className="card comments-card border-0 bg-custom">
                <div className="card-body">
                  <p className="text-center border-bottom border-2 pb-2 b mb-4 text-capitalize">
                    commentaires ({comments.length})
                  </p>
                  {role === "visiteur" && (
                    <CommentForm onAddComment={handleAddComment} poem={poem} />
                  )}
                  <div className="d-flex my-3">
                    <button className="btn btn-custom text-capitalize" onClick={toggleComments}>
                    {role !== null && (
    showComments ? <i className="fa fa-eye-slash large-icon"></i> : <i className="fa fa-comments large-icon"></i>
)}

                    </button>
                  </div>
                  {showComments && (
                    <ul className="list-group list-group-flush">
                      {comments.map((comment) => (
                        <Comment comment={comment} pseudo={pseudo} userId={userId} key={comment.id} />
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

