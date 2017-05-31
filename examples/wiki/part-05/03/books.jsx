import React from "react";

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

    return model => (<div>
      <p>Book Page</p>
      <ul>
        {model.books.map(book =>
          <li key={book.id}>
            <a href={"#/books/" + book.id}>{book.title}</a>
            {" "}
            <button className="btn btn-default btn-xs"
                onClick={actions.bookSummary(book.id)}>
              {book.title}
            </button>
          </li>
        )}
      </ul>
    </div>);
  },
  display: (update, params) => update(merge({ page: books.page, params }))
};
