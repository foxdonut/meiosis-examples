import { Model } from "./types";

const initialModel: Model = {
  tab: "books",
  inProgress: false,
  circulation: {
    bookIds: [],
    booksById: {}
  }
};

export { initialModel };
