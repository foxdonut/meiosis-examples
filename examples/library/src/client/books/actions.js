import { assocPath, dissocPath } from "lodash";

export const setSelectedBook = (book, selected) => model => selected
  ? assocPath(["selectedBooks", book.isbn], book, model)
  : dissocPath(["selectedBooks", book.isbn], model);

export const createActions = update => ({
  selectBook: (book, evt) => update(setSelectedBook(book, evt.target.checked))
});
