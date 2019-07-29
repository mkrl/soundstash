export function updateBookmarks(value) {
  localStorage.setItem('bookmarks', JSON.stringify(value));
  return {
    type: "BOOKMARKS_UPDATE",
    payload: value,
  }
}
