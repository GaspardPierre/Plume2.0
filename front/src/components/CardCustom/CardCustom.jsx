import React from 'react';
import Card from 'react-bootstrap/Card';
import './CardCustom.scss';
// import cardImage from'../../assets/bg.jpg';

export default function CardCustom({ title, excerpt, id, onCardClick}) {
  const handleClick = () => {
    onCardClick(id); 
  };

  return (
    <Card className='card'
    key={id} >
     {/* <Card.Img variant="bottom" src={cardImage}/> */}
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