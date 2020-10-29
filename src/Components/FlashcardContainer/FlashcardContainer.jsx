import React, { Component } from 'react';

export default class FlashcardContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            flashcardList: []
        }
    }

    async componentDidMount() {
        await this.getFlashcardList()
    }

    async getFlashcardList() {
        if (this.props.selection) {
            const flashcards = await this.props.getFlashcards()

            this.setState({
                flashcardList: flashcards
            })
        }
    }

    render() {
        if (!this.state.flashcardList.length) return null;
        return (
            <div className="container">
                {this.state.flashcardList.map(flashcard =>
                    <div key={flashcard._id} className="flashcard">{flashcard.word}</div>
                )}
            </div>
        );
    }
}
