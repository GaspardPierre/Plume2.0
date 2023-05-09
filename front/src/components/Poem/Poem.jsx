import React from 'react';
import { useParams } from 'react-router-dom';

export default function Poem({ poems }) {
  const { id } = useParams();
  const poem = poems.find((poem) => poem.id === parseInt(id));
  console.log(poem)

  if (!poem) {
    return <div>Poème introuvable</div>;
  }

  return (
    <div className="poem">
      <h2>{poem.title}</h2>
      <p>{poem.content}</p>
      <p className="author">- {poem.author}</p>
    </div>
  );
}
