import { defineElement as el } from "domvm";
import { path, prop } from "ramda";

const bookRow = (actions, problems, selectedBooks) => book =>
  el("tr.book-item", { _key: book.id }, [
    el("td", [
      el("input.book-select[type=checkbox]", { name: `select_${book.id}`,
        checked: !!prop(book.isbn, selectedBooks),
        onclick: [actions.selectBook, book] })
    ]),
    el("td.book-title", book.title),
    el("td.book-authors", book.lastName + ", " + book.firstName),
    el("td.book-problem", path([book.isbn, "type"], problems)),
    el("td.book-problem", path([book.isbn, "description"], problems))
  ]);

export const createView = actions => model =>
  el("table.book-list", [
    el("thead", [
      el("tr", [
        el("th"),
        el("th", "Title"),
        el("th", "Authors"),
        el("th", "Problem Type"),
        el("th", "Problem Description")
      ])
    ]),
    el("tbody", model.books.map(bookRow(actions, model.problems, model.selectedBooks)))
  ]);
