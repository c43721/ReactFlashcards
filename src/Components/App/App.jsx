import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Collection from "../Collection/Collection";
import FlashcardContainer from "../FlashcardContainer/FlashcardContainer";

const BASE_API_URL = "http://localhost:5000/api/collections/";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: "",
      showFlashcard: true,
    };
  }

  setSelection(id) {
    this.setState({
      selection: id,
    });
  }

  hideCard = () => {
    const { showFlashcard } = this.state.showFlashcard;
    this.setState({
      showFlashcard: !showFlashcard,
    });
  };

  async getCollections() {
    try {
      const { data } = await axios.get(BASE_API_URL);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getFlashcards(collectionId) {
    try {
      const { data } = await axios.get(BASE_API_URL + collectionId + "/cards");
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className='App'>
        <Collection
          getCollections={() => this.getCollections()}
          setSelection={this.setSelection.bind(this)}
          selection={this.state.selection}
        />
        <FlashcardContainer
          key={this.state.selection}
          selection={this.state.selection}
          getFlashcards={this.getFlashcards.bind(this)}
          hideCard={this.hideCard}
        />
      </div>
    );
  }
}
