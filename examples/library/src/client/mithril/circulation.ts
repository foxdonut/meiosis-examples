import * as m from "mithril";

import { Book } from "../../persistence/book";
import { BookListModel } from "../root/types";
import { VDom, View } from "./types";
import { CirculationActions } from "../circulation/actions";

function renderBook(booksById: { [id: string]: Book }): (id: string) => VDom {
  return function(bookId: string): VDom {
    const book: Book = booksById[bookId];
    return m("tr", [
      m("td", book.title),
      m("td", ""),
      m("td", book.genre)
    ]);
  };
}

export const circulationView: View<BookListModel, CirculationActions> = (model: BookListModel, actions: CirculationActions): VDom => {
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
}
