import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class BooksStore extends EventEmitter {
    constructor(){
        super();

        this.books = [
            {id: 1, title:'Pod Igoto', author:'Ivan Vazov', dateAdded: Date.now(), comments: [{author: 'Pesho', title: 'nice book'}]},
            {id: 2, title:'Prespanskite Kambani', author:'Dimitar Talev', dateAdded: Date.now(), comments: [{author: 'Gosho', title: 'my favourite'}]}
        ];
    }

    getAll () {
        return new Promise((resolve, reject) => {
           resolve(this.books.slice(0));
        });
    }

    getById (id) {
        return new Promise((resolve, reject) => {
            resolve(this.books.filter(x => x.id === id).slice(0));
        });
    }

    createBook (title, author) {
        const id = this.books.length + 1;
        const dateAdded = Date.now();
        this.books.push({
            id,
            title,
            author,
            dateAdded
        });

        this.emit('change');
    }

    deleteBook (id) {
        let bookToDeleteIndex = this.books.indexOf(x => x.id === id);
        this.books.splice(bookToDeleteIndex, 1);

        this.emit('change');
    }

    handleAction (action) {
        switch (action.type) {
            case 'CREATE_BOOK': {
                this.createBook(action.title, action.author);
                break;
            }
            case 'DELETE_BOOK': {
                this.deleteBook(action.id);
                break;
            }
            default:{
                throw new Error("Invalid action type");
            }
        }
    }
}

let booksStore = new BooksStore();

dispatcher.register(booksStore.handleAction.bind(booksStore));

export default booksStore;

