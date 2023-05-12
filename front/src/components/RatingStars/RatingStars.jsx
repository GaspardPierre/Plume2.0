import React , { useState }from 'react';
import ReactStars from "react-rating-stars-component";

export default function RatingStars() {
    const [rating, setRating] = useState(0);

    const ratingChanged = (newRating) => {
      setRating(newRating);
      // Envoyer la valeur de newRating à votre API
    };
    return (
        <div>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
          <p>La moyenne est {rating}</p>
        </div>
      );
    };