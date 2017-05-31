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

    return model => m("div",
      m("p", "Book Page"),
      m("ul",
        model.books.map(book =>
          m("li", { key: book.id },
            m("a[href='#/books/" + book.id + "']", book.title),
            m("span", " "),
            m("button.btn.btn-default.btn-xs",
              { onclick: actions.bookSummary(book.id) }, book.title)
          )
        )
      )
    );
  },
  display: (update, params) => update(merge({ page: books.page, params }))
};
