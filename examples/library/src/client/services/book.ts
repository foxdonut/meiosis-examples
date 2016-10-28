import { Promise } from "es6-promise";
import { Ajax } from "./ajax";
import { Book } from "../../persistence";

export interface BookServices {
  loadBooks: () => Promise<Array<Book>>;
}

export function createBookServices(ajax: Ajax): BookServices {
  return {
    loadBooks: () => ajax.getJSON<Array<Book>>("/examples/library/api/books")
  };
}
