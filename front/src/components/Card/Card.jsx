import React from 'react';
import './Card.scss';

export default function Card  ({ title, excerpt, onClick })  { 

  
        return (
          <div className="col-md-4" >
            <div className="card text-center" >
              <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{excerpt}</p>
                <button className="btn btn-primary" onClick={onClick}>
                  Afficher plus
                </button>
              </div>
            </div>
          </div>
        );
      };
      