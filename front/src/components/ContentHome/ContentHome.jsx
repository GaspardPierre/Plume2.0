import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "../../reducers/member";



export default function ContentHome({role}) {
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
        <Link to="/admin" className="btn-custom">
          Administrer le blog
        </Link>
        <Link to="/poems" className="btn-custom">
          Poèmes
        </Link>
        <Link to="/novels" className="btn-custom">
          Nouvelles
        </Link>
        <Link to="/unclassifiable" className="btn-custom">
          Hors Catégories
        </Link>
        <Link to="/about" className="btn-custom">
          A Propos
        </Link>
        <Link to="/" className="btn-custom" onClick={handleLogout}  >
          Déconnexion
        </Link>
      </>
    );
  } else if (role === "visiteur") {
    content = (
      <>
        <Link to="/poems" className="btn-custom">
          Poèmes
        </Link>
        <Link to="/novels" className="btn-custom">
          Nouvelles
        </Link>
        <Link to="/unclassifiable" className="btn-custom">
          Hors Catégories
        </Link>
        <Link to="/about" className="btn-custom">
          A Propos
        </Link>
        <Link to="/" className="btn-custom" onClick={handleLogout}  >
          Déconnexion
        </Link>
      </>
    );
  } else if (role === null) {
    content = (
      <>
        <Link to="/login" className="btn-custom">
          Connexion
        </Link>
        <Link to="/signin" className="btn-custom">
            Inscription
        </Link>
        <Link to="/poems" className="btn-custom">
          Poèmes
        </Link>
        <Link to="/novels" className="btn-custom">
          Nouvelles
        </Link>
        <Link to="/unclassifiable" className="btn-custom">
          Hors Catégories
        </Link>
        <Link to="/about" className="btn-custom">
          A Propos
        </Link>
      </>
    );
  }

  return (
    <div className="col-12 col-lg-6 d-flex justify-content-center flex-wrap">
        {content}
    </div>
  );
}
