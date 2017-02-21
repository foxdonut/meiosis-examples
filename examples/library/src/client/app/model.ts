import { Model } from "./types";

export const initialModel: Model = {
  tab: "books",
  inProgress: false,
  circulation: {
    bookIds: [],
    booksById: {}
  }
};

/*
export const rootReceive: Scanner<Model, Proposal> = (model: Model, proposal: Proposal) => {
  switch (proposal.type) {
    case "Server.LoadBookList":
      model.inProgress = true;
      break;

    case "Server.LoadedBookList":
      model.inProgress = false;
      model[proposal.section].bookIds = pluck("id")<string>(proposal.books);

      model[proposal.section].booksById = reduce((booksById, book) => {
        booksById[String(book.id)] = book;
        return booksById;
      }, {}, proposal.books);
      break;
  }
  return model;
}
*/
