import React, { Component } from 'react';
import axios from "axios";
import "./App.css";
import Collection from '../Collection/Collection';
import FlashcardContainer from '../FlashcardContainer/FlashcardContainer';

const BASE_API_URL = 'http://localhost:5000/api/collections/'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selection: ''
    }
  }

  setSelection(id) {
    this.setState({
      selection: id
    })
  }

  //TODO wrap in try/catch
  async getCollections() {
    const { data } = await axios.get(BASE_API_URL)
    return data
  }

  //TODO wrap in try/catch
  async getFlashcards(collectionId) {
    const { data } = await axios.get(BASE_API_URL + collectionId + "/cards")
    return data
  }

  render() {
    return (
      <div className="App">
        <Collection
          getCollections={() => this.getCollections()}
          setSelection={this.setSelection.bind(this)}
          selection={this.state.selection}
        />
        <FlashcardContainer
          key={this.state.selection}
          selection={this.state.selection}
          getFlashcards={this.getFlashcards.bind(this)}
        />
      </div>
    );
  }
}
