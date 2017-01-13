import { Stream } from "meiosis";
import { Book } from "../../persistence";
import { Proposal } from "../root/types";
import { BookServices } from "../services/book";

export interface CirculationActions {
  loadBookList: () => void;
};

export function createActions(propose: Stream<Proposal>, services: BookServices): CirculationActions {
  return {
    loadBookList: () => {
      propose({ type: "Server.LoadBookList", section: "circulation" });
      services.loadBooks().then((books: Array<Book>) => {
        propose({ type: "Server.LoadedBookList", section: "circulation", books });
      });
    }
  };
}
