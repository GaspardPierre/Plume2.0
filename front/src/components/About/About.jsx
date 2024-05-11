import React from 'react'
import auteur from '../../assets/mat.png'
import './About.scss'
export default function About() {
  return (
    <div className='container'>
        <div className="row">
    <div className="col-md-6 my-4">
    <div className=" card shadow">
    <img src={auteur} className="card-img-top" alt="Photo de Matthieu Mouquet" />
    
  </div>
    </div>
    <div className="col-md-6">
    <h2 className="display-4 mb-3 text-left">Biographie</h2>
    <div className="d-flex align-items-center" style={{ height: 'calc(100% - 56px)' }}> {/* Ajustez la hauteur si nécessaire */}
        <blockquote className="blockquote mb-0 custom-line-height">
            <p className='citation fst-italic custom-line-height'>"Comme cet oiseau qui ramène l'amour</p> 
            <p className='citation fst-italic custom-line-height'>L'été passe par la complicité</p>
            <p className='citation fst-italic custom-line-height'>Je laisse l'oiseau se poser"</p>
            <footer className="blockquote-footer mt-5 custom-line-height">Matthieu Mouquet</footer>
        </blockquote>
    </div>
</div>

  </div>
  <div className='row'>
    <div className='col-md-12'>
    <p className="lead lead bio-text mt-3 px-2 ">Matthieu est bien plus qu'un simple écrivain-poète ; il incarne la fusion entre l'émotion et les mots, transformant sa douleur en beauté littéraire. Depuis ses débuts à l'âge de 15 ans et demi, il a utilisé l'écriture comme un moyen de transcender les défis physiques et émotionnels auxquels il fait face. Son parcours, marqué par des périodes difficiles, est devenu le terreau fertile de sa créativité.Sa professeure de français fut témoin de son talent lorsqu'il écrivit : <span className="className='citation fst-italic"> "Écris ce que tu ressens, même une lettre peut suffire à stimuler ton imagination et à dissiper le brouillard en toi."</span></p><p className=' my-3 md-my-5 lead lead bio-text px-2 '>

Cette simple devise révèle son engagement à exprimer ses émotions à travers les mots, une philosophie qui guide chacune de ses œuvres.Dès lors, Matthieu a exploré divers genres littéraires, plongeant d'abord dans la poésie en 2021. Ses poèmes, telles des feuilles d'automne emportées par le vent, capturent la beauté éphémère de l'existence.

En février, il découvrit les haïkus japonais, ajoutant une nouvelle dimension à son expression artistique.En dépit de ses luttes contre la dyspraxie, Matthieu refuse de se laisser définir par ses limitations.
Au contraire, il les transforme en atouts, infusant ses écrits d'une sensibilité unique et d'une profondeur émotionnelle.

Chaque mot qu'il choisit est empreint de sincérité et de vérité, reflétant son voyage intérieur.
Sur son site, plongez dans l'univers captivant de Matthieu, où chaque texte est une invitation à explorer les méandres de l'âme humaine et à embrasser la beauté de l'imperfection...</p>

    </div>

  </div>
      
      </div>
  )
}
