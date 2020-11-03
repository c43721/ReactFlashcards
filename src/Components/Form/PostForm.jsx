import React, { Component } from "react";

export default class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: "",
      inputTextArea: "",
    };
  }

  changedHandler = event => {
    this.setState({ [event.target.name]: [event.target.definition] });
  };

  render() {
    const { word, definition } = this.state;
    return (
      <div>
        <div>
          <input
            value={word}
            onChange={this.changedHandler}
            name='word'></input>
        </div>
        <div>
          <textarea
            value={definition}
            onChange={this.changedHandler}
            name='definition'></textarea>
        </div>
        <p onClick={() => console.log("clicked")}>Finish</p>
      </div>
    );
  }
}
