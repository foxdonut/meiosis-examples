import m from "mithril";

import { bookSummary } from "./bookSummary";
import { merge } from "./util";

export const books = {
  page: {
    id: "Books",
    tab: "Books"
  },
  create: update => {
    const actions = {
      bookSummary: id => () => bookSummary.display(update, { id }),
    };

    return _model => m("div",
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
      )
    );
  },
  display: (update, params) => update(merge({ page: books.page, params }))
};
