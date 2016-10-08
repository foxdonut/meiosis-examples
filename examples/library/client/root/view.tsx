import * as React from "react";
import { ReactElement} from "react";
import { Book } from "../../persistence/book";

import { Model } from "./model";

function renderBook(book: Book): ReactElement<any> {
  return (
    <li>{book.title}</li>
  );
}

function view(model: Model): ReactElement<any> {
  return (
    <div>
      <ul>
        {model.books.map(renderBook)}
      </ul>
    </div>
  );
}

export { view };