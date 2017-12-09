import { assoc } from "ramda";

import { createView } from "./view";
import { state } from "./state";

import { createOperations } from "../operations";
import { createBooks } from "../books";

import { fetchOperations, fetchBooks, fetchProblems } from "../services";

export const createMain = update => new Promise(resolve => {
  const operations = createOperations(update);
  const books = createBooks(update);

  const main = {
    model: () => ({
      operations: [],
      books: [],
      problems: {}
    }),

    view: createView({
      operations,
      books
    }),

    state
  };

  resolve(main);

  fetchBooks().then(books => update(assoc("books", books)));
  fetchOperations().then(operations => update(assoc("operations", operations)));
  fetchProblems().then(problems => update(assoc("problems", problems)));
});
