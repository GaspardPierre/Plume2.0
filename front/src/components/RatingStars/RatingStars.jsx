import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { addAverage, fetchAverage } from "../../reducers/average";

export default function RatingStars({ poemId }) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.member.id);
  const id = poemId;
  const averages = useSelector((state) => state.average.averages);

  // calc average
  const poemAverage = averages.filter((avg) => avg.work_id === parseInt(id));
  const total = poemAverage.reduce((acc, avg) => acc + avg.average, 0);

  const average =
    poemAverage.length > 0
      ? Math.round((total / poemAverage.length) * 100) / 100
      : 0;
  const [rating, setRating] = useState(average);
  // Check if user has already voted
  const userHasAlreadyVoted = averages.some(
    (avg) => avg.member_id === userId && avg.work_id === id
  );
  console.log("userHasAlreadyVoted:", userHasAlreadyVoted);
  useEffect(() => {
    if (averages.length === 0) {
      dispatch(fetchAverage());
    }
  }, [dispatch, averages, userHasAlreadyVoted]);

  const ratingChanged = (newRating) => {
    setRating(newRating);
    const data = {
      average: newRating,
      member_id: userId,
      work_id: id,
    };
    dispatch(addAverage(data)).then(() => {
      dispatch(fetchAverage());
    });
  };
  return (
    <div>
      <ReactStars
        count={5}
        value={average}
        isHalf={true}
        onChange={ratingChanged}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        size={24}
        activeColor="#ffd700"
        transition
        fillColor="orange"
        emptyColor="yellow"
        edit={!userHasAlreadyVoted ? ratingChanged : null}
      />
      <p>Note du poème : {average}</p>
    </div>
  );
}
