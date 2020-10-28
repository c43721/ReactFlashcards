import React, { Component } from 'react';
import Card from '../Card/Card';
import './Collection.css'

export default class Collection extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            selected: ''
        }
    }

    async componentDidMount() {
        await this.renderCollections()
    }

    setSelection(id) {
        this.setState({
            selected: id
        })
    }

    async renderCollections() {
        const collections = await this.props.getCollections()

        this.setState({
            items: collections
        })
    }

    render() {
        return (
            <div className="container">
                {this.state.items.map(collection =>
                    <Card
                        selected={this.state.selected === collection._id}
                        setSelection={this.setSelection.bind(this, collection._id)}
                        key={collection._id}
                        {...collection}
                    />)}
            </div>
        );
    }
}
