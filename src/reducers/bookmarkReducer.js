const initialState = {
  bookmarks: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "BOOKMARKS_UPDATE":
      return {
        ...state,
        bookmarks: action.payload,
      }
    default:
      return state
  }
}