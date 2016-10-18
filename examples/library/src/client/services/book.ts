import { Promise } from "es6-promise";
import { Book } from "../../persistence/book";
import { Ajax } from "../util/ajax-axios";

export interface BookServices {
  loadBooks: () => Promise<Array<Book>>;
}

export function createBookServices(ajax: Ajax): BookServices {
  return {
    loadBooks: () => ajax.getJSON<Array<Book>>("/examples/library/api/books")
  };
}
