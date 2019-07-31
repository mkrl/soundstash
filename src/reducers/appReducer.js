const initialState = {
  isSearchActive: true,
  searchText: ''
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'APP_SET_SEARCH_VISIBILITY':
      return {
        ...state,
        isSearchActive: action.payload
      }
    case 'APP_SET_TEXT':
      return {
        ...state,
        searchText: action.payload
      }
    default:
      return state
  }
}
