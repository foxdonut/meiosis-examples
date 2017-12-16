import { defineElement as el } from "domvm";
import constant from "crocks/combinators/constant";
import prop from "crocks/Maybe/prop";
import propPath from "crocks/Maybe/propPath";

const bookRow = (actions, problems, selectedBooks) => book =>
  el("tr.book-item", { _key: book.id }, [
    el("td", [
      el("input.book-select[type=checkbox]", { name: `select_${book.id}`,
        checked: prop(book.isbn, selectedBooks).map(constant(true)).option(false),
        onclick: [actions.selectBook, book] })
    ]),
    el("td.book-title", book.title),
    el("td.book-authors", book.lastName + ", " + book.firstName),
    el("td.book-problem-type", propPath([book.isbn, "type"], problems).option("")),
    el("td.book-problem-description", propPath([book.isbn, "description"], problems).option(""))
  ]);

export const createView = actions => model =>
  el("table.book-list.striped", [
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
