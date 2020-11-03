import React, { Component } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Flashcard.css";

export default class Flashcard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flipped: false
    }
  }

  flipCard() {
    this.setState({
      flipped: !this.state.flipped
    })
  }

  render() {
    const lengthOfCards = this.props.length;
    const currentCardIndex = this.props.index + 1; //+1 because .map starts with index 0
    return (
      <div className={`flashcard ${this.state.flipped ? 'flipped' : ''}`} onClick={() => this.flipCard()}>
        {this.state.flipped ? <BackFlashcard definition={this.props.definition} currentCardIndex={currentCardIndex} lengthOfCards={lengthOfCards} /> : <FrontFlashcard word={this.props.word} />}
      </div>
    )
  }
}

function FrontFlashcard(props) {
  return (
    <div className="front">
      <h3 className='word'>{props.word}</h3>
    </div >
  );
}

function BackFlashcard(props) {
  return (
    <div className="back">
      <div className='definition'>{props.definition}</div>
      <div className="footer">
        {/* Render specific arrow based on if the length is greater, less, or neither */}
        {props.currentCardIndex - 1 === 0
          ?
          <div className="row">
            <span>
              {props.currentCardIndex} of {props.lengthOfCards}
            </span>
            <IoIosArrowForward />
          </div>
          : props.currentCardIndex + 1 > props.lengthOfCards
            ?
            <div className="row">
              <IoIosArrowBack />
              <span>
                {props.currentCardIndex} of {props.lengthOfCards}
              </span>
            </div>
            :
            <div className="row">
              <IoIosArrowBack />
              <span>
                {props.currentCardIndex} of {props.lengthOfCards}
              </span>
              <IoIosArrowForward />
            </div>
        }
      </div>
    </div>
  );
}