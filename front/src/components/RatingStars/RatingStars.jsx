import React, { useEffect, useState , useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import {store }from "../../store/store";
import ReactStars from "react-rating-stars-component";
import { addAverage, fetchAverage } from "../../reducers/average";
import { useMemberState } from "../../hooks/customHooks";
import './RatingStars.scss';
import AlertMessage from "../../ui/AlertMessage";

export default function RatingStars({ poemId }) {

  //Modal Alert Message
  const [showAlert, setShowAlert] = useState(false);
  const handleCloseAlert = () => setShowAlert(false);

  //STORE

  const role = useMemberState();
  console.log('role dans RatingStars', role.role);
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
  const [displayedAverage, setDisplayedAverage] = useState(average);

  // Check if user has already voted
  const userHasAlreadyVoted = averages.some(
    (avg) => avg.member_id === userId && avg.work_id === id
  );
// Handle hover on stars
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    if (!userHasAlreadyVoted) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
//  fetch averages 
  useEffect(() => {
    if (averages.length === 0) {
      dispatch(fetchAverage());
    }
  }, [dispatch, averages, userHasAlreadyVoted]);
// display new average and update it
  useEffect(() => {
    const newAverage =
      poemAverage.length > 0
        ? Math.round((total / poemAverage.length) * 100) / 100
        : 0;
    setRating(newAverage);
    setDisplayedAverage(newAverage);
  }, [averages, id]);

  const ratingChanged = (newRating) => {
    if (role.role === null || role.role === "") {
      setShowAlert(true);
      return;
    }
    setShowAlert(false);
  
    setRating(newRating);
    setDisplayedAverage(newRating);
    setIsHovered(false);
    if (!userHasAlreadyVoted) {
      const data = {
        average: newRating,
        member_id: userId,
        work_id: id,
      };

      dispatch(addAverage(data)).then(() => {
        dispatch(fetchAverage()).then(() => {
          const newAverage = store.getState().average.averages;
          const newUserHasAlreadyVoted = newAverage.some(
            (avg) => avg.member_id === userId && avg.work_id === id
          );
          console.log("newUserHasAlreadyVoted", newUserHasAlreadyVoted);
        });
      });
    }
  };
  return (
    <div className="flex-column  stars-container ">
 <AlertMessage show={showAlert} handleClose={handleCloseAlert}
 title={ "⚠️ Attention! "}
 message={ "Vous devez être connecté pour voter ! ☝️"}  />
      
      
    
    <ReactStars
        key={average} 
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
        edit={!userHasAlreadyVoted && !isHovered && role!==null}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      
      <div >
        <p className="text-muted">Note  : {average}</p>
      </div>
      </div>

  
  );
}

