import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchComments, addComment, deleteComment } from "../../reducers/comment";
import { fetchAverage } from "../../reducers/average";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import RatingStars from "../RatingStars/RatingStars";
import { useMemberState } from "../../hooks/customHooks";
import Share from "../Share/Share";
import poemBg from'../../assets/poem.png';  
import DOMPurify from 'dompurify';


import "./Poem.scss";

export default function Poem() {

    const navigate = useNavigate();
    const { id } = useParams();
    const label = useSelector((state) => state.label.labels);
    const labelId = useSelector((state) => state.label.labelId);
   



    const poems = useSelector((state) => state.work.works);
    const poem = poems.find((p) => p.id === parseInt(id));
  

    if (!poem) {
        return <div className="error-div">Une erreur est survenue , merci de vous reconnecter</div>;
    }

    const averageByPoem = useSelector((state) => state.average.averageByPoem);
    const average = averageByPoem[poem.id];

    const { pseudo, userId, role } = useMemberState();



    const comments = useSelector((state) => state.comment.comments) || [];
    const dispatch = useDispatch();
    const [showComments, setShowComments] = useState(false);
    const toggleComments = () => {
        setShowComments(!showComments);
    };
    const [error, setError] = useState(null);

    const handleAddComment = useCallback(
        (comment) => {
            dispatch(addComment(comment));
        },
        [dispatch]
    );

 



    useEffect(() => {
        try {
            dispatch(fetchComments(id));
            dispatch(fetchAverage());
           
        } catch (error) {
        
            setError(error);
        }
    }, [id]);
    if (!pseudo) {
      
        return (
            <div className="error-div">
                <p>Vous devez être connectés pour voir les poèmes!!</p>
                <Link to="/">
                    <i className="fa fa-home"></i> Accueil
                </Link>
            </div>
        );
    } else { 

    return (
        <>
            {error ? (
                <div>Une erreur s'est produite : {error.message}</div>
            ) : (
                <div className="container my-5 poem-container "
                style={{ backgroundImage: `url(${poemBg})` }}
                >
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-5 poem-section opacity-80">
                            <div className="card  poem-card border-0 bg-custom  ">
                            
                                <div className="card-body">
                          
                                    <div className="d-flex justify-content-between rating-container ">
                                    <RatingStars poemId={poem.id} />
                                    <div className=" ">
                                    <h2 className="card-title text-center mb-3 font-custom ">{poem.title}</h2>
                                    <h6 className=" text-center  text-muted author-name font-color py-1">{poem.author}</h6>
                                    </div>

                                    </div>
                                

                                    <p className="card-text poem-content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(poem.content) }}></p>

                                    <div className="d-flex justify-content-center">
                                    <Share poemId={poem.id} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* COMMENT SECTION */}
                        <div className="col-lg-5 col-md-12 comments-section ">
                        <div className="card comments-card border-0 bg-custom ">
                        <div className="card-body">
                            
          <p className='text-center border-bottom border-2 pb-2 b mb-4 text-capitalize'> commentaires ({comments.length})</p>
                            { role === "visiteur" && (
                        <CommentForm
                            onAddComment={handleAddComment}
                            poem={poem}
                            average={average}
                           comments={comments}
                        />
                            )}
                
      
                      <div className="d-flex my-3 ">
                      <button className="btn btn-custom text-capitalize " onClick={toggleComments}>
                     
                           
                        {showComments ?<i className="fa fa-eye-slash large-icon"
                       ></i> : <i className="fa fa-comments large-icon"
                       ></i>}
                    </button>
                    </div>
                    {showComments && (
                            <ul className="list-group list-group-flush ">
                                {comments.map((comment) => (
                                    <Comment
                                        comment={comment}
                                        pseudo={pseudo}
                                        userId={userId}
                                        key={comment.id}
                                        
                                    />
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
}