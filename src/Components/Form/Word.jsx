import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word: "",
    };
  }

  handleWordChange = event => {
    this.setState = {
      wordInput: event.target.value,
    };
  };

  render() {
    return (
      <form>
        <input
          type='text'
          value={this.state.wordInput}
          onChange={this.handleWordChange}></input>
      </form>
    );
  }
}

export default Form;
