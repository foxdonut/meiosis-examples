import { Book } from "../../persistence";
import { BookServices } from "../services/book";

export interface CirculationActions {
  loadBookList: () => void;
};

export function createActions(services: BookServices): CirculationActions {
  return {
    loadBookList: () => {
      //propose({ type: "Server.LoadBookList", section: "circulation" });
      services.loadBooks().then((books: Array<Book>) => {
        //propose({ type: "Server.LoadedBookList", section: "circulation", books });
      });
    }
  };
}
