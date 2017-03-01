import { pluck, reduce } from "ramda";
import { Mapper, Stream } from "meiosis";
import { actions } from "./actions";
import { Book } from "../../persistence";
import { Model } from "../app/types";

const loadBookList: Stream<Mapper<Model, Model>> = actions.loadBookList.map(
  (bookList: Array<Book>) => (model: Model) => {
    model.inProgress = false;
    model["circulation"].bookIds = pluck("id")<string>(bookList);
    model["circulation"].booksById = reduce((booksById, book) => {
      booksById[String(book.id)] = book;
      return booksById;
    }, {}, bookList);
    return model;
  }
);

export const modelChanges = loadBookList;
