import React from 'react';
import Book from './Book';
import BooksStore from '../stores/books-store';
import BooksActions from '../actions/books-actions';


export default class BooksList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            author: '',
            books: []
        }

        BooksStore.on('change', () => {
            this.getAllBooks();
        })

    }

    render() {
        const { books } = this.state;

        const bookElements = books.map(book => (
            <Book key={book.id} title={book.title} author={book.author} />
        ));

        return (
            <div>
                <ul>{bookElements}</ul>
                <div>
                    <input
                        type='text'
                        ref='title'
                        value={this.state.title}
                        onChange={this.handleTitleChange.bind(this)} />
                    <input
                        type='text'
                        ref='author'
                        value={this.state.author}
                        onChange={this.handleAuthorChange.bind(this)} />
                    <button onClick={this.createBook.bind(this)}>Add Book</button>
                </div>
            </div>
        )
    }

    componentDidMount () {
        this.getAllBooks();
    }

    getAllBooks () {
        BooksStore
            .getAll()
            .then(books => this.setState({ books }));
    }

    createBook (event) {
        event.preventDefault();
        BooksActions.createBook(this.state.title, this.state.author);
        this.setState({ title: '', author: '' });
    }

    handleTitleChange (event) {
        this.setState({ title: event.target.value })
    }

    handleAuthorChange (event) {
        this.setState({ author: event.target.value })
    }
}
