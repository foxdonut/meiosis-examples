export const setSelectedBook = (book, selected) => model => {
  const selectedBooks = model.selectedBooks;
  if (selected) {
    selectedBooks[book.isbn] = book;
  }
  else {
    delete selectedBooks[book.isbn];
  }
  return model;
};

export const createActions = update => ({
  selectBook: (book, evt) => update(setSelectedBook(book, evt.target.checked))
});
