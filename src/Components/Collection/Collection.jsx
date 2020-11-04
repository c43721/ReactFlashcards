import React, { Component } from "react";
import Card from "../Card/Card";
import "./Collection.css";

export default class Collection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  async componentDidMount() {
    await this.renderCollections();
  }

  async renderCollections() {
    const collections = await this.props.getCollections();

    this.setState({
      items: collections,
    });
  }

  render() {
    return (
      <div className='container'>
        {this.state.items.length ? (
          this.state.items.map(collection => (
            <Card
              selected={this.props.selection === collection._id}
              setSelection={this.props.setSelection.bind(this, collection._id)}
              key={collection._id}
              {...collection}
              addCardHandler={this.props.addCard}
            />
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
    );
  }
}
