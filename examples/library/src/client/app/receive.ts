import { Scanner } from "meiosis";
import { pluck, reduce } from "ramda";
import { Model } from "./types";

export const rootReceive: Scanner<Model, any> = (model: Model, proposal: any) => {
  switch (proposal.type) {
    case "Server.LoadBookList":
      model.inProgress = true;
      break;

    case "Server.LoadedBookList":
      model.inProgress = false;
      model[proposal.section].bookIds = pluck("id")<string>(proposal.books);

      model[proposal.section].booksById = reduce((booksById, book) => {
        //booksById[String(book.id)] = book;
        return booksById;
      }, {}, proposal.books);
      break;
  }
  return model;
}
