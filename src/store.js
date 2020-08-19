import { combineReducers, createStore } from 'redux';
import BookmarkReducer from './reducers/BookmarkReducer';

const reducers = combineReducers({
  bookmarkState: BookmarkReducer,
});

const initialState = {
  bookmarkState: [],
};

const store = createStore(
  reducers,
  initialState,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
