import { combineReducers, createStore } from 'redux';
import BookmarkReducer from './reducers/BookmarkReducer';
import PageTitleReducer from './reducers/PageTitleReducer';

const reducers = combineReducers({
  bookmarkState: BookmarkReducer,
  pageTitleState: PageTitleReducer,
});

const initialState = {
  bookmarkState: [],
  pageTitleState: '',
};

const store = createStore(
  reducers,
  initialState,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
