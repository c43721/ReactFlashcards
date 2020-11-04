import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Collection from "../Collection/Collection";
import FlashcardContainer from "../FlashcardContainer/FlashcardContainer";
import Form from "../Form/Form";

const BASE_API_URL = "http://localhost:5000/api/collections/";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: "",
      flashcardFront: "",
      flashcardBack: ""
    };
  }

  setFlashcardFront(newFront) {
    this.setState({
      flashcardFront: newFront
    })
  }

  setFlashcardBack(newBack) {
    this.setState({
      flashcardBack: newBack
    })
  }

  setSelection(id) {
    this.setState({
      selection: id,
    });
  }

  // Tried to make this render into the form component,
  //but the form component already have a on
  async addCard(e) {
    e.preventDefault();
  }

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

  async handleCardSubmit(e) {
    if (!this.state.selection || this.state.selection === "") {
      e.preventDefault();
      return alert("You need to click on a collection first, please!");
    }
    const postBody = {
      word: this.state.flashcardFront,
      definition: this.state.flashcardBack
    }

    const URL = BASE_API_URL + this.state.selection + "/cards";

    try {
      await axios.post(URL, postBody);
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
          addCard={this.addCard.bind(this)}
        />

        <FlashcardContainer
          key={this.state.selection}
          selection={this.state.selection}
          getFlashcards={this.getFlashcards.bind(this)}
          hideCard={this.hideCard}
        />

        <Form
          handleSubmit={this.handleCardSubmit.bind(this)}
          onFrontChange={this.setFlashcardFront.bind(this)}
          onBackChange={this.setFlashcardBack.bind(this)}
        />
      </div>
    );
  }
}
