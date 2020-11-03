import React from "react";
import "./Flashcard.css";
import { IoIosArrowForward } from "react-icons/io";

export default function Flashcard(props) {
  return (
    <div className='flashcard'>
      <h3 className='word'>{props.word}</h3>
      <p className='definition'>{props.definition}</p>
      <div className='page'>
        {props.index + 1} of {props.length}
      </div>
      <div className='arrow'>
        <IoIosArrowForward />
      </div>
    </div>
  );
}
