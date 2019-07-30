import axios from 'axios'

export function queryText(text, passedOffset = 0) {
  return function (dispatch) {
    dispatch({ type: "FETCH_API" })
    axios.get(`https://musicbrainz.org/ws/2/release?query=${text}&offset=${passedOffset}&limit=20&fmt=json`)
      .then(resp => {
        dispatch({
          type: "FETCH_API_SUCCESS",
          payload: {
            releases: resp.data["releases"],
            count: resp.data["count"],
            offset: resp.data["offset"],
          }
        })
      })
      .catch(err => dispatch({ type: "FETCH_API_ERROR", payload: err.message}))
  }
}

export function clearSearch() {
  return {
    type: "FETCH_CLEAR"
  }
}