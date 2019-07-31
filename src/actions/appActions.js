export function setText (text) {
  return {
    type: 'APP_SET_TEXT',
    payload: text
  }
}

export function setSearchVisibility (value) {
  return {
    type: 'APP_SET_SEARCH_VISIBILITY',
    payload: value
  }
}
