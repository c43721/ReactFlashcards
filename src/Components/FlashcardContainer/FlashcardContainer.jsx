import React, { Component } from "react";
import Flashcard from "../Flashcard/Flashcard";

export default class FlashcardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flashcardList: [],
    };
  }

  async componentDidMount() {
    await this.getFlashcardList();
  }

  async getFlashcardList() {
    if (!this.props.selection.length) return;
    const flashcards = await this.props.getFlashcards(this.props.selection);

    this.setState({
      flashcardList: flashcards,
    });
  }

  render() {
    return (
      <div className='container'>
        {this.props.selection.length > 0 &&
          this.state.flashcardList.map((flashcard, index) => (
            <Flashcard
              key={flashcard._id}
              word={flashcard.word}
              console={console.log(flashcard)}
              definition={flashcard.definition}
              length={this.state.flashcardList.length}
              index={index + 1}
            />
          ))}
      </div>
    );
  }
}
