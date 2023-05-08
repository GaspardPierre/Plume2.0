import React from "react";
import Grid from "../Grid/Grid";

export default function Poems() {
  const poems = [
    {
      id: 1,
      title: "L'espoir",
      content:
        `Dans les ténèbres les plus épaisses,
         L'espoir s'est levé,
         Comme un triomphant soleil,
         Aux ailes protectrices,
          L'Espoir a dit "ne retiens pas,
          Il a jailli comme un éclair,
          Dans une nuit de tempête,
          Il s'est souvenu...
          L'Espoir a ouvert grand ses bras,
          Il a regardé au-delà,
          il a dit "me voici!
          Et sur le bois il s'est offert,
          Il a déversé la vie des cieux sur la terre,
          Il a détrempé mon cœur de ses flots,
          Il a ouvert une brèche,
          Et sa lumière est devenue un feu,
          Brûlant comme un flambeau puissant,
          Du gouffre vers l'éternité,
          Avec sa chair et son sang,
          Il a bâti un pont.`,
      author: "Pierre Dillard"
    },
    {
      id: 2,
      title: "L'espoir",
      content:
        `Dans les ténèbres les plus épaisses,
         L'espoir s'est levé,
         Comme un triomphant soleil,
         Aux ailes protectrices,
          L'Espoir a dit "ne retiens pas,
          Il a jailli comme un éclair,
          Dans une nuit de tempête,
          Il s'est souvenu...
          L'Espoir a ouvert grand ses bras,
          Il a regardé au-delà,
          il a dit "me voici!
          Et sur le bois il s'est offert,
          Il a déversé la vie des cieux sur la terre,
          Il a détrempé mon cœur de ses flots,
          Il a ouvert une brèche,
          Et sa lumière est devenue un feu,
          Brûlant comme un flambeau puissant,
          Du gouffre vers l'éternité,
          Avec sa chair et son sang,
          Il a bâti un pont.`,
      author: "Pierre Dillard"
    },
    {
      id: 3,
      title: "L'espoir",
      content:
          `Dans les ténèbres les plus épaisses,
          L'espoir s'est levé,
          Comme un triomphant soleil,
          Aux ailes protectrices,
          L'Espoir a dit "ne retiens pas,
          Il a jailli comme un éclair,
          Dans une nuit de tempête,
          Il s'est souvenu...
          L'Espoir a ouvert grand ses bras,
          Il a regardé au-delà,
          il a dit "me voici!
          Et sur le bois il s'est offert,
          Il a déversé la vie des cieux sur la terre,
          Il a détrempé mon cœur de ses flots,
          Il a ouvert une brèche,
          Et sa lumière est devenue un feu,
          Brûlant comme un flambeau puissant,
          Du gouffre vers l'éternité,
          Avec sa chair et son sang,
          Il a bâti un pont.`,
      author: "Pierre Dillard"
    },
    {
      id: 4,
      title: "L'espoir",
      content:
        `Dans les ténèbres les plus épaisses,
         L'espoir s'est levé,
         Comme un triomphant soleil,
         Aux ailes protectrices,
          L'Espoir a dit "ne retiens pas,
          Il a jailli comme un éclair,
          Dans une nuit de tempête,
          Il s'est souvenu...
          L'Espoir a ouvert grand ses bras,
          Il a regardé au-delà,
          il a dit "me voici!
          Et sur le bois il s'est offert,
          Il a déversé la vie des cieux sur la terre,
          Il a détrempé mon cœur de ses flots,
          Il a ouvert une brèche,
          Et sa lumière est devenue un feu,
          Brûlant comme un flambeau puissant,
          Du gouffre vers l'éternité,
          Avec sa chair et son sang,
          Il a bâti un pont.`,
      author: "Pierre Dillard"
    },
    {
      id: 5,
      title: "L'espoir",
      content:
        `Dans les ténèbres les plus épaisses,
         L'espoir s'est levé,
         Comme un triomphant soleil,
         Aux ailes protectrices,
          L'Espoir a dit "ne retiens pas,
          Il a jailli comme un éclair,
          Dans une nuit de tempête,
          Il s'est souvenu...
          L'Espoir a ouvert grand ses bras,
          Il a regardé au-delà,
          il a dit "me voici!
          Et sur le bois il s'est offert,
          Il a déversé la vie des cieux sur la terre,
          Il a détrempé mon cœur de ses flots,
          Il a ouvert une brèche,
          Et sa lumière est devenue un feu,
          Brûlant comme un flambeau puissant,
          Du gouffre vers l'éternité,
          Avec sa chair et son sang,
          Il a bâti un pont.`,
      author: "Pierre Dillard"
    },
    {
      id: 6,
      title: "L'espoir",
      content:
          `Dans les ténèbres les plus épaisses,
          L'espoir s'est levé,
          Comme un triomphant soleil,
          Aux ailes protectrices,
          L'Espoir a dit "ne retiens pas,
          Il a jailli comme un éclair,
          Dans une nuit de tempête,
          Il s'est souvenu...
          L'Espoir a ouvert grand ses bras,
          Il a regardé au-delà,
          il a dit "me voici!
          Et sur le bois il s'est offert,
          Il a déversé la vie des cieux sur la terre,
          Il a détrempé mon cœur de ses flots,
          Il a ouvert une brèche,
          Et sa lumière est devenue un feu,
          Brûlant comme un flambeau puissant,
          Du gouffre vers l'éternité,
          Avec sa chair et son sang,
          Il a bâti un pont.`,
      author: "Pierre Dillard"
    }
  ];

  const excerpt = function (str) {
    const summary = str.substring(0, 100)+ "...";
    return summary;
  };
  const handleOnClick = (id) => {
    console.log('Clicked poem with id:', id);
  };
  return (
    <div className="container-fluid-custom">
      <Grid
        poems={poems.map((poem) => ({ ...poem, excerpt: excerpt(poem.content) }))}
        onClick={handleOnClick}
      />
    </div>
  );
}

