import { Stream } from "meiosis";
import { streamLibrary } from "../util";
import { Book } from "../../persistence";
import { bookServices } from "../services/book";

export const actions = {
  loadBookList: streamLibrary.stream<Array<Book>>()
};

export const intents = {
  loadBookList: () => {
    bookServices.loadBooks().then(actions.loadBookList)
  }
};
