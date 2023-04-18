import React from "react";
import "./Button.scss"



export default function Button({ children }) {
  return (
      <button className="custom-btn btn-primary my-2">
          { children }
      </button>
  );
}
