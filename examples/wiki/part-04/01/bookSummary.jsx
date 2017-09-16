import React from "react";

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

    return model => (<div>
      {components.books(model)}
      <p>Summary of book {model.params.id}</p>
      <a href="#" onClick={actions.bookDetails(model.params.id)}>View details</a>
      {" "}
      <button className="btn btn-default btn-xs"
          onClick={actions.bookDetails(model.params.id)}>
        View details
      </button>
    </div>);
  },
  display: (update, params) => update(merge({ page: bookSummary.page, params }))
};
