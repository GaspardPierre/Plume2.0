import React from 'react';
import Card from 'react-bootstrap/Card';
import './CardCustom.scss';
import cardBackground from'../../assets/card_bg.png';
export default function CardCustom({ title, excerpt, onClick }) {
  return (
    <Card className='card' style={{ backgroundImage: `url(${cardBackground})` }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{excerpt}</Card.Text>
        <button className="btn-custom-card" onClick={onClick}>
          Afficher plus
        </button>
      </Card.Body>
    </Card>
  );
}
