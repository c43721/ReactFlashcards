import React, { Component } from "react";

class TextArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  handleTextChange = event => {
    this.setState(() => {
      return {
        text: event.target.value,
      };
    });
  };

  render() {
    return (
      <textarea
        value={this.state.text}
        onChange={this.handleTextChange}></textarea>
    );
  }
}

export default TextArea;
