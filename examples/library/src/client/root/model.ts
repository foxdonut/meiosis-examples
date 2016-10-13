import { Model } from "./types";

function initialModel(model: Model): Model {
  return {
    books: [{id: 1, title: "Book One"}, {id: 2, title: "Book Two"}]
  };
}

export { initialModel };
