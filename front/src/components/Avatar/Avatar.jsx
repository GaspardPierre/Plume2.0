import React, { useState, useEffect } from 'react'

import './Avatar.scss'

export default function Avatar({ pseudo }) {
  const [bgColor, setBgColor] = useState('#6182BC');
  useEffect(() => {
    setBgColor(stringToColor(pseudo)); // Mettre à jour la couleur lorsque le composant est monté
  }, [pseudo]);


  //Function to hash a pseudo

  const stringToColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const colorKeys = Object.keys(cssColors);
    const index = Math.abs(hash) % colorKeys.length; // get a value between 0 and colorKeys.length
    return cssColors[colorKeys[index]];
  };

  const cssColors = {
    aqua: "#00FFFF",
    blue: "#0000FF",
    fuchsia: "#FF00FF",
    green: "#008000",
    lime: "#00FF00",
    maroon: "#800000",
    navy: "#000080",
    olive: "#808000",
    purple: "#800080",
    teal: "#008080",
    red: "#FF0000",
    yellow: "#FFFF00",
    darkblue: "#00008B",
    darkcyan: "#008B8B",
    darkgreen: "#006400",
    darkmagenta: "#8B008B",
    darkorange: "#FF8C00",
    darkred: "#8B0000",
    gold: "#FFD700",
    midnightblue: "#191970",
    darkslateblue: "#483D8B",
    forestgreen: "#228B22",
    darkviolet: "#9400D3",
    saddlebrown: "#8B4513",
    darkgoldenrod: "#B8860B",
    firebrick: "#B22222",
    crimson: "#DC143C"

  };


  const firstLetterPseudo = pseudo ? pseudo[0].toUpperCase() : 'A';

  return (
    <div className='avatar strong' style={{ backgroundColor: bgColor }}>
      <span className='font-color fw-bold fs-5'>
        {firstLetterPseudo}
      </span>
    </div>
  );
}