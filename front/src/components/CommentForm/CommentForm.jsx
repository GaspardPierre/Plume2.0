import React, { useState } from 'react';
import './CommentForm.scss';
import logo from'../../assets/logo.png';

export default function CommentForm({ poem, onAddComment, comments }) {
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            onAddComment({ comment: comment.trim(), poemId: poem.id });
            setComment('');
        }
    };
   

    return (
        <> 
      
        <h5 className="card-title text-center py-5   text-uppercase">Laisser un commentaire</h5>
       
     
          <textarea 
                className="form-control  w-100 comment-input mx-auto m border-0 " 
                value={comment} 
                onChange={(e) => setComment(e.target.value)} 
                placeholder="Votre commentaire..."
            ></textarea>
            <button className="btn btn-poem text-capitalize my-2" onClick={handleSubmit}> poster</button>
        
          
        </>
    );
}
