import assoc from "crocks/helpers/assoc";

import { createView } from "./view";
import { state } from "./state";

import { createOperations } from "../operations";
import { createBooks } from "../books";

import { fetchOperations, fetchBooks, fetchProblems } from "../services";

export const createMain = update => {
  const operations = createOperations(update);
  const books = createBooks(update);

  const initialFetch = function() {
    fetchBooks().then(books => update(assoc("books", books)));
    fetchOperations().then(operations => update(assoc("operations", operations)));
    fetchProblems().then(problems => update(assoc("problems", problems)));
  };

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

    state,
    initialFetch
  };

  return main;
};
