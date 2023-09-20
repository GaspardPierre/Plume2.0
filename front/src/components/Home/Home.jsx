import React from "react";
import ContentHome from "../ContentHome/ContentHome";
import { useSelector } from "react-redux";
import "../../scss/styles.scss";
import "./Home.scss";

export default function Home() {
  const role = useSelector((state) => state.member.role);
  console.log("role:", role);
  
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

     
        <header className="header-container container mb-4 sticky-top">
          <div className="row">
            <h1 className="text-center">Plume 2.0</h1>
          </div>
        
        <div className="container">
        <img src="https://mdbootstrap.com/img/new/slides/041.jpg" className="mw-100 rounded mb-2" alt="..." />
        </div>
        </header>
     

        <div className="home__main__container d-flex align-items-center">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <ContentHome role={role} />
            </div>
          </div>
        </div>
     
    </>
  );
}
