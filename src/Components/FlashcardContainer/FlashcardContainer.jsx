import React, { Component } from 'react';

export default class FlashcardContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            flashcardList: [],
        }
    }

    async componentDidMount() {
        await this.getFlashcardList()
    }

    async getFlashcardList() {
        if (!this.props.selection.length) return
        const flashcards = await this.props.getFlashcards(this.props.selection)

        this.setState({
            flashcardList: flashcards,
        })
    }

    render() {
        return (
            <div className="container">
                {this.props.selection.length > 0 && this.state.flashcardList.map(flashcard =>
                    <div key={flashcard._id} className="flashcard">{flashcard.word}</div>
                )}
            </div>
        );
    }
}
