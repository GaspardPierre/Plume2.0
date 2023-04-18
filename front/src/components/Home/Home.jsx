import React from "react";
import Button from "../Button/Button";
import "./Home.scss";


export default function Home() {
  return (
    <>
      <h1 className="text-center">Page de la home</h1>
      <div className="home__main__container d-flex align-items-center">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 d-flex justify-content-center flex-wrap">
              <Button >Inscription</Button>
              <Button >Connexion</Button>
              <Button>Poèmes</Button>
              <Button >Nouvelles</Button>
              <Button >Hors Catégories</Button>
              <Button >A Propos</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
