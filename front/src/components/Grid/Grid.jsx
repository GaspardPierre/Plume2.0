import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardCustom from "../CardCustom/CardCustom";

function Grid({ poems }) {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {poems.map((poem) => (
        <Col key={poem.id}>
          <CardCustom title={poem.title}
           excerpt={poem.excerpt} 
           id={poem.id} />
        </Col>
      ))}
    </Row>
  );
}

export default Grid;
