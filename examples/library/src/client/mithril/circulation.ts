import * as m from "mithril";

import { Author, Book } from "../../persistence";
import { BookListModel } from "../root/types";
import { VDom } from "./types";
import { CirculationActions } from "../circulation/actions";

function renderAuthor(author: Author) {
  return m("div", author.lastName + ", " + author.firstName);
}

function renderBook(booksById: { [id: string]: Book }): (id: string) => VDom {
  return function(bookId: string): VDom {
    const book: Book = booksById[bookId];
    return m("tr", [
      m("td", book.title),
      m("td", book.authors.map(renderAuthor)),
      m("td", book.genre)
    ]);
  };
}

export const circulationView = (model: BookListModel): VDom => {
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
