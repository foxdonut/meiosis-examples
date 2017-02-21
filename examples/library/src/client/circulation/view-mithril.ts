import * as m from "mithril";

import { Author, Book } from "../../persistence";
import { BookListModel } from "../app";

function renderAuthor(author: Author) {
  return m("div", author.lastName + ", " + author.firstName);
}

function renderBook(booksById: { [id: string]: Book }): (id: string) => any {
  return function(bookId: string): any {
    const book: Book = booksById[bookId];
    return m("tr", [
      m("td", book.title),
      m("td", book.authors.map(renderAuthor)),
      m("td", book.genre)
    ]);
  };
}

export const circulationView = (model: BookListModel): any => {
  return m("table.table.table-bordered.table-striped.table-hover.table-condensed", [
    m("thead", [
      m("tr", [
        m("th", "Title"),
        m("th", "Author(s)"),
        m("th", "Genre")
      ])
    ]),
    m("tbody", model.bookIds.map(renderBook(model.booksById)))
  ]);
};
