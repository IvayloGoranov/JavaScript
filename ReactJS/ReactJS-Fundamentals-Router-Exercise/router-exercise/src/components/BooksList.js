import React from 'react';
import Book from './Book';
import BooksStore from '../stores/books-store';
import BooksActions from '../actions/books-actions';
import BookForm from './BookForm';
import toastr from 'toastr';

export default class BooksList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            author: '',
            books: [],
            errors: {
                title: '',
                author: ''
            }
        };

        BooksStore.on('change', () => {
            this.getAllBooks();
        });
    }

    render() {
        let { books } = this.state;

        let bookElements = books.map(book => (
            <Book key={book.id} title={book.title} author={book.author} />
        ));

        return (
            <div>
                <ul>{bookElements}</ul>
                <BookForm title={this.state.title}
                          author={this.state.author}
                          onInputChange={this.handleInputChanged.bind(this)}
                          onSave={this.createBook.bind(this)}
                          buttonValue='Add'
                          errors={this.state.errors}/>
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

        if(!this.validateBook()){
            return;
        }

        BooksActions.createBook(this.state.title, this.state.author);
        this.setState({ title: '', author: '' });
        toastr.success("Book created");
    }

    handleInputChanged(event){
        if(event.target.type === 'checkbox'){
            this.setState({[event.target.name]: event.target.checked});
        }
        else {
            this.setState({[event.target.name]: event.target.value});
        }
    }

    validateBook(){
        let bookTitle = this.state.title;
        let bookAuthor = this.state.author;
        let errors = {};
        let formIsValid = true;

        if(!bookTitle || bookTitle.length < 2){
            errors.title = 'Minimum 2 symbols';
            formIsValid = false;
        }

        if(!bookAuthor || bookAuthor.length < 2){
            errors.author = 'Minimum 2 symbols';
            formIsValid = false;
        }

        console.log(errors);

        this.setState({errors});
        return formIsValid;
    }
}
