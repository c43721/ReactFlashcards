import React, { Component } from "react";

class TextArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  handleTextChange = event => {
    this.setState = {
      textInput: event.target.value,
    };
    console.log(this.handleTextChange);
  };

  render() {
    return (
      <textarea
        value={this.state.textInput}
        onChange={this.handleTextChange}></textarea>
    );
  }
}

export default TextArea;
