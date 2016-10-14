import { Model } from "./types";

function initialModel(model: Model): Model {
  return {
    tab: "books",
    booksById: {
      "1": {id: "1", title: "Book One"},
      "2": {id: "2", title: "Book Two"}
    },
    bookIds: ["1", "2"]
  };
}

export { initialModel };
