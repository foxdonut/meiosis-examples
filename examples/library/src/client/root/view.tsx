import * as React from "react";
import { ReactElement } from "react";
import { Book } from "../../persistence/book";

import { Model } from "./model";

type View = ReactElement<any>;

function renderBook(book: Book): View {
  return (
    <li key={book.id}>{book.title}</li>
  );
}

function view(model: Model): View {
  return (
    <div>
      <div>Books:</div>
      <ul>
        {model.books.map(renderBook)}
      </ul>
    </div>
  );
}

export { View, view };