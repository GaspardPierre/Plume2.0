import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function ListWork({works}) {
    const { works } = useSelector((state) => state.works);
    console.log(works);
  return (
    <ListGroup>
        {works.map((work) => (
            <ListGroup.Item key={work.id}>
                {work.title} - {work.author}
            </ListGroup.Item>
        ))}
    </ListGroup>



  )
}
