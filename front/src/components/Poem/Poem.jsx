import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Poem.scss';


export default function Poem({ }) {
  const { id } = useParams();

  const poems = useSelector((state) => state.work.works);
  const poem = poems.find((poem) => poem.id === parseInt(id));
 

  if (!poem) {
    return <div>Poème introuvable</div>;
  }

  return (
    <div className="poem">
    <h1 className="main-title">Poem</h1>
    <Container className="main-container">
      <Row className="justify-content-center">
        <Col className="work-container">
        <h2 className="poem-title">{poem.title}</h2>
  <p className="poem-content">{poem.content}</p>
  <p className="poem-author">{poem.author}</p>
  </Col>

        <Col className="comment-rating-container">
          {/* Fonctionnalité de notation et commentaires */}
        </Col>
      </Row>
    </Container>
  </div>

  );
}
