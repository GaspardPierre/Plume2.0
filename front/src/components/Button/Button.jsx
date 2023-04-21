import React from "react"
import "./Button.scss";





export default function Button({ children }) {
  return (
      <button className="btn btn-custom ">
          { children }
      </button>
  );
}
