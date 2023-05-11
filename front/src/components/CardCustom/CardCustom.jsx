import React from 'react';
import Card from 'react-bootstrap/Card';
import './CardCustom.scss';
import cardBackground from'../../assets/card_bg.jpg';

export default function CardCustom({ title, excerpt, id, onCardClick}) {
  const handleClick = () => {
    onCardClick(id); 
  };

  return (
    <Card className='card' style={{ backgroundImage: `url(${cardBackground})` }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{excerpt}</Card.Text>
        <button className="btn-custom-card" onClick={handleClick}>
          Afficher plus
        </button>
      </Card.Body>
    </Card>
  );
}