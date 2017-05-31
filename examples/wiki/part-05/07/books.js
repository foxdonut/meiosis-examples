import m from "mithril";

import { bookDetails } from "./bookDetails";
import { merge } from "./util";

export const books = {
  page: {
    id: "Books",
    tab: "Books"
  },
  create: update => {
    const actions = {
      bookSummary: id => () => books.display(update, { id }),
      bookDetails: id => () => bookDetails.display(update, { id })
    };

    const bookSummary = id => id ? [
      m("p",
        "Summary of book " + id
      ),
      m("a[href='#/books/" + id + "/details']", "View details"),
      m("span", " "),
      m("button.btn.btn-default.btn-xs",
        { onclick: actions.bookDetails(id) }, "View details")
    ] : null;

    return model => m("div",
      m("p", "Book Page"),
      m("ul",
        m("li",
          m("a[href='#/books/1']", "Book 1"),
          m("span", " "),
          m("button.btn.btn-default.btn-xs",
            { onclick: actions.bookSummary(1) }, "Book 1")
        ),
        m("li",
          m("a[href='#/books/2']", "Book 2"),
          m("span", " "),
          m("button.btn.btn-default.btn-xs",
            { onclick: actions.bookSummary(2) }, "Book 2")
        )
      ),
      bookSummary(model.params.id)
    );
  },
  display: (update, params) => update(merge({ page: books.page, params }))
};
