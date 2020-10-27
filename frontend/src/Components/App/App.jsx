import React, { Component } from 'react';
import axios from "axios";
import "./App.css";

const BASE_API_URL = 'http://localhost:5000/api/collections/'

export default class App extends Component {


  async getCollection() {
    return await axios.get(BASE_API_URL);
  }

  render() {
    return (
      <div className="App">
        Hello
      </div>
    );
  }
}
