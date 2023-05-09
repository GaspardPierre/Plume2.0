import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import './CardCustom.scss';
import cardBackground from'../../assets/card_bg.png';
export default function CardCustom({ title, excerpt, id }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/poem/${id}`);
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
