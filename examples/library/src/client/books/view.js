import { defineElement as el } from "domvm";
import { path, prop } from "ramda";

const bookRow = (actions, problem, selectedBooks) => book =>
  el("tr.book-item", { _key: book.id }, [
    el("td", [
      el("input.book-select[type=checkbox]", { name: `select_${book.id}`,
        checked: !!prop(book.isbn, selectedBooks),
        onclick: [actions.selectBook, book] })
    ]),
    el("td.book-title", book.title),
    el("td.book-authors", book.lastName + ", " + book.firstName),
    el("td.book-problem", { title: path([book.isbn, "message"], problem) },
      path([book.isbn, "status"], problem))
  ]);

export const createView = actions => model =>
  el("table.book-list", [
    el("thead", [
      el("tr", [
        el("th"),
        el("th", "Title"),
        el("th", "Authors"),
        el("th", "Problem")
      ])
    ]),
    el("tbody", model.books.map(bookRow(actions, model.problem, model.selectedBooks)))
  ]);
