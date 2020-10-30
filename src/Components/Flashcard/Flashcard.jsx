import React from "react";
import "./Flashcard.css";
import Button from "../Button/Button";

export default function Flashcard(props) {
  return (
    <div className='flashcard'>
      {props.word}
      {props.definition}
      <br />
      {props.index} of {props.length}
      <br />
      <Button />
    </div>
  );
}
