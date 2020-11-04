import React from "react";
import "./Card.css";
import Button from "../Button/Button";

export function Card(props) {
  return (
    <div
      className={`card ${props.selected ? "selected" : ""}`}
      onClick={() => props.setSelection()}>
      <div className='card-header'>{props.title}</div>
      <div>Cards: {props.cards.length}</div>
      <div onClick={e => props.addCard(e)}>
        <Button />
      </div>
    </div>
  );
}

export default Card;
