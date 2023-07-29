import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "../../reducers/member";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPowerOff,
  faRightToBracket,
  faUserPlus,
  faFeatherAlt,
  faNewspaper,
  faThLarge,
  faInfoCircle,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function ContentHome({ role }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  let content;

  if (role === "admin") {
    content = (
      <>

        <Link to="/admin" className="btn-custom btn-icon">
          {" "}
          <FontAwesomeIcon icon={faUserPlus} color="white" size="2x" />
          Admin
        </Link>
        <Link to="/poems" className="btn-custom btn-icon">
          <FontAwesomeIcon icon={faFeatherAlt} color="white" size="2x" />
          Poèmes
        </Link>
        <Link to="/novels" className="btn-custom btn-icon">
          <FontAwesomeIcon icon={faNewspaper} color="white" size="2x" />
          Nouvelles
        </Link>
        <Link to="/unclassifiable" className="btn-custom btn-icon">
          <FontAwesomeIcon icon={faThLarge} color="white" size="2x" />
          inclassable
        </Link>
        <Link to="/about" className="btn-custom btn-icon">
          <FontAwesomeIcon icon={faInfoCircle} color="white" size="2x" />A
          Propos
        </Link>
        <Link to="/" className="btn-custom btn-icon" onClick={handleLogout}>
          <FontAwesomeIcon icon={faPowerOff} color="white" size="2x" />
          Déconnexion
        </Link>
      </>
    );
  } else if (role === "visiteur") {
    content = (
      <>
        <Link to="/poems" className="btn-custom btn-icon">
          <FontAwesomeIcon icon={faFeatherAlt} color="white" size="2x" />
          Poèmes
        </Link>
        <Link to="/novels" className="btn-custom btn-icon">
          <FontAwesomeIcon icon={faNewspaper} color="white" size="2x" />
          Nouvelles
        </Link>
        <Link to="/unclassifiable" className="btn-custom btn-icon">
          <FontAwesomeIcon icon={faThLarge} color="white" size="2x" />
          inclassable
        </Link>
        <Link to="/about" className="btn-custom btn-icon">
          <FontAwesomeIcon icon={faInfoCircle} color="white" size="2x" />A
          Propos
        </Link>
        <Link to="/" className="btn-custom btn-icon" onClick={handleLogout}>
          <FontAwesomeIcon icon={faPowerOff} color="white" size="2x" />
          Déconnexion
        </Link>
      </>
    );
  } else if (role === null) {
    content = (
      <>
      
        <Link to="/login" className="btn-custom btn-icon">
          <FontAwesomeIcon icon={faSignInAlt} color="white" size="2x" />
          Connexion
        </Link>
        <Link to="/signin" className="btn-custom btn-icon">
          <FontAwesomeIcon icon={faRightToBracket} color="white" size="2x" />
          Inscription
        </Link>
        <Link to="/poems" className="btn-custom btn-icon">
          <FontAwesomeIcon icon={faFeatherAlt} color="white" size="2x" />
          Poèmes
        </Link>
        <Link to="/novels" className="btn-custom btn-icon">
          <FontAwesomeIcon icon={faNewspaper} color="white" size="2x" />
          Nouvelles
        </Link>
        <Link to="/unclassifiable" className="btn-custom btn-icon">
          <FontAwesomeIcon icon={faThLarge} color="white" size="2x" />
          inclassable
        </Link>
        <Link to="/about" className="btn-custom btn-icon">
          <FontAwesomeIcon icon={faInfoCircle} color="white" size="2x" />A
          Propos
        </Link>
      </>
    );
  }

  return (
    <div className="d-flex flex-column flex-md-row justify-content-center flex-wrap">

      {content}
    </div>
  );
}
