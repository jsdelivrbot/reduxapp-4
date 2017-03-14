import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActibeBook from './reducer_active_book'
//state: (state = {}) => state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActibeBook
});

export default rootReducer;
