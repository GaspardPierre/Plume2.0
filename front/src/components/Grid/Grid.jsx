import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardCustom from '../CardCustom/CardCustom';

function Grid({ poems, onClick }) {
  return (
    <Row xs={1} md={3} className="g-4">
      {poems.map((poem) => (
        <Col key={poem.id}>
          <CardCustom
            title={poem.title}
            excerpt={poem.excerpt}
            onClick={() => onClick(poem.id)}
          />
        </Col>
      ))}
    </Row>
  );
}

export default Grid;
