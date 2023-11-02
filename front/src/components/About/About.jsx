import React from 'react'
import auteur from '../../assets/mat.png'

export default function About() {
  return (
    <div className='container'>
        <div className="row">
    <div className="col-md-6 my-4">
    <div className=" card shadow">
    <img src={auteur} className="card-img-top" alt="Auteur"/>
  </div>
    </div>
    <div className="col-md-6">
    <h2 className="display-4 mb-3 text-left">Biographie</h2>
        {/* Citation */}
        <blockquote className="blockquote">
            <p className='citation fst-italic'>"Comme cet oiseau qui ramène l'amour</p> 
            <p className='citation fst-italic'>L'été passe par la complicité</p>
            <p className='citation fst-italic'>Je laisse l'oiseau se poser"</p>
            <footer className="blockquote-footer">Matthieu Mouquet</footer>
          </blockquote>
  <p className="lead lead bio-text">Matthieu, jeune poète de 18 ans a écrit ces nombreux poèmes en même pas un an et six mois !.</p>
    </div>
  </div>
      
      </div>
  )
}
