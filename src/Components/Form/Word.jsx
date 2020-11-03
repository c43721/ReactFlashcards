import React, { Component } from "react";
import Button from "../Button/Button";

class Word extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word: "",
    };
  }

  handleWordChange = event => {
    this.setState(() => {
      return {
        word: event.target.value,
      };
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type='text'
            value={this.state.word}
            onChange={this.handleWordChange}></input>
        </form>
        <Button />
      </div>
    );
  }
}

export default Word;
