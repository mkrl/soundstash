// Bookmarks are stored in their simple "cached" variant:
// id, record name and a single string for authors

export function updateBookmarks (value) {
  window.localStorage.setItem('bookmarks', JSON.stringify(value))
  return {
    type: 'BOOKMARKS_UPDATE',
    payload: value
  }
}
