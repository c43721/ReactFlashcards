import React from "react";
import "./Card.css";

export function Card(props) {
  return (
    <div
      className={`card ${props.selected ? "selected" : ""}`}
      onClick={() => props.setSelection()}>
      <div className='card-header'>{props.title}</div>
      <div>Cards: {props.cards.length}</div>
    </div>
  );
}

export default Card;
