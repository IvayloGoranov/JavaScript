import React from 'react';
import BooksActions from '../actions/books-actions';

export default class Book extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <li>
                {this.props.title} - {this.props.author}
                <button onClick={this.deleteBook.bind(this)}>Delete</button>
            </li>
        )
    }

    deleteBook(event){
        event.preventDefault();
        BooksActions.deleteBook(this.props.id);
    }
}
