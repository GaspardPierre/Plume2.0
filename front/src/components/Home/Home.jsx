import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRole } from "../../selectors/memberSelectors";

import "../../scss/styles.scss";
import "./Home.scss";

export default function Home() {
  const role = useSelector(selectRole);
  console.log(role);
  return (
    <>
      <title>Plume 2.0 - Accueil</title>
      <meta
        name="description"
        content="Bienvenue sur Plume 2.0 - la plateforme de partage de poèmes et de nouvelles en ligne"
      />
      <meta
        name="keywords"
        content="plume, poèmes, nouvelles, partage, écriture"
      />

     
        <header className="header-container container mb-8">
          <div className="row">
            <h1 className="text-center mb-2">Plume 2.0</h1>
          </div>
        </header>

        <div className="home__main__container d-flex align-items-center">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-6 d-flex justify-content-center flex-wrap">
                {role === "admin" && (
                  <Link to="/signin" className="btn-custom">
                    Administrer le blog
                  </Link>
                )}

                <Link to="/signin" className="btn-custom">
                  Inscription
                </Link>
                <Link to="/login" className="btn-custom">
                  Connexion
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
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
}
//comment faire disparaitre le scroll horizontale sur la page d'accueil?
