import React, { Component } from 'react';
import axios from "axios";
import "./App.css";
import Collection from '../Collection/Collection';

const BASE_API_URL = 'http://localhost:5000/api/collections/'

export default class App extends Component {
  async getCollections() {
    const { data } = await axios.get(BASE_API_URL);
    return data
  }

  render() {
    return (
      <div className="App">
        <Collection getCollections={() => this.getCollections()} />
      </div>
    );
  }
}
