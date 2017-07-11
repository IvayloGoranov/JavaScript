import dispatcher from '../dispatcher';

let booksActions = {
    booksAll: () => {
        dispatcher.dispatch({
            type: 'BOOKS_ALL'
        });
    },

    bookById: (id) => {
        dispatcher.dispatch({
            type: 'BOOK_BY_ID',
            id: id
        })
    },

    createBook: (title, author, comments) => {
        dispatcher.dispatch({
            type: 'CREATE_BOOK',
            title: title,
            author: author
        })
    },

    deleteBook: (id) => {
        dispatcher.dispatch({
            type: 'DELETE_BOOK',
            id: id
        })
    }
}

export default booksActions;
