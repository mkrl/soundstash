const initialState = {
  searchText: "",
  fetching: false,
  fetched: false,
  text: null,
  releases: [],
  count: null,
  offset: null,
  error: null
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_API":
      return {
        ...state,
        fetching: true,
        error: null
      }
    case "FETCH_CLEAR":
      return {
        ...state,
        fetching: false,
        releases: [],
        fetched: false
      }
    case "FETCH_API_ERROR":
      return {
        ...state,
        fetching: false,
        error: action.payload,
      }
    case "FETCH_API_SUCCESS":
      return {
        ...state,
        fetching: false,
        fetched: true,
        releases: action.payload.releases,
        count: action.payload.count,
        offset: action.payload.offset,
      }
    case "FETCH_API_OFFSET":
      return {
        ...state,
        fetching: false,
        offset: action.payload,
      }
    default:
      return state
  }
}