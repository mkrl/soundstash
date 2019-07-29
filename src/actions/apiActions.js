export function queryText(text) {
  return {
    type: "FETCH_API",
    payload: text,
  }
}
