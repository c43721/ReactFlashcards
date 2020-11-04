import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Collection from "../Collection/Collection";
import FlashcardContainer from "../FlashcardContainer/FlashcardContainer";
import Form from "../Form/Form";
import Button from "../Button/Button";

const BASE_API_URL = "http://localhost:5000/api/collections/";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: "",
    };
  }

  setSelection(id) {
    this.setState({
      selection: id,
    });
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

  handleCardSubmit(e) {
    e.preventDefault();
    console.log("Card submitted!");
  }

  handleCollectionSubmit(e) {
    e.preventDefault();
    console.log("Collection submitted!");
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

        <Form
          handleSubmit={this.handleCardSubmit.bind(this)}
        />

        <Form
          handleSubmit={this.handleCollectionSubmit.bind(this)}
        />
      </div>
    );
  }
}
