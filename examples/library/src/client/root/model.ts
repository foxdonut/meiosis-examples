import { Book } from "../../persistence/book";

interface Model {
  books: Array<Book>;
}

function initialModel(): Model {
  return {
    books: [{id: 1, title: "Book One"}, {id: 2, title: "Book Two"}]
  };
}

export { Model, initialModel };
