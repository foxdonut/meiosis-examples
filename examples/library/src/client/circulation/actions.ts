import { ActionCreator } from "meiosis";
import { Book } from "../../persistence";
import { Proposal, Propose } from "../root/types";
import { BookServices } from "../services/book";

export interface CirculationActions {
  loadBookList: () => void;
};

export function createActions(services: BookServices): ActionCreator<Proposal, CirculationActions> {
  return (propose: Propose): CirculationActions => ({
    loadBookList: () => {
      propose({ type: "Server.LoadBookList", section: "circulation" });
      services.loadBooks().then((books: Array<Book>) => {
        propose({ type: "Server.LoadedBookList", section: "circulation", books });
      });
    }
  });
}
