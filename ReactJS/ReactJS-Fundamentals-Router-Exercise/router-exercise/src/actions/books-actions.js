import dispatcher from '../dispatcher'

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
    }
}

export default booksActions;
