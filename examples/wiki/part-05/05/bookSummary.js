import m from "mithril";

import { books } from "./books";
import { bookDetails } from "./bookDetails";
import { merge } from "./util";

export const bookSummary = {
  page: {
    id: "BookSummary",
    tab: "Books"
  },
  create: update => {
    const components = {
      books: books.create(update)
    };
    const actions = {
      bookDetails: id => () => bookDetails.display(update, { id })
    };

    return model => [
      components.books(model),
      m("p", "Summary of book " + model.params.id),
      m("a[href='#/books/" + model.params.id + "/details']", "View details"),
      m("span", " "),
      m("button.btn.btn-default.btn-xs",
        { onclick: actions.bookDetails(model.params.id) }, "View details")
    ];
  },
  display: (update, params) => update(merge({ page: bookSummary.page, params }))
};
