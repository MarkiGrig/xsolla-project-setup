const BookmarkReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOKMARK': {
      return [...state, action.id];
    }
    case 'REMOVE_BOOKMARK': {
      return state.filter((id) => id !== action.id);
    }
    default:
      return state;
  }
};

export default BookmarkReducer;
