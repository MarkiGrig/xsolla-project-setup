const PageTitleReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_PAGE-TITLE': {
      return action.title;
    }
    default:
      return state;
  }
};

export default PageTitleReducer;
