import React, { Component } from "react";
import Flashcard from "../Flashcard/Flashcard";

class NextIndexCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  render() {
    return (
      <div>
        <Flashcard />
      </div>
    );
  }
}

export default NextIndexCard;
