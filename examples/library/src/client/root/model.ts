import { Model } from "./types";

function initialModel(model: Model): Model {
  return {
    tab: "books",
    inProgress: false,
    circulation: {
      bookIds: [],
      booksById: {}
    }
  };
}

export { initialModel };
