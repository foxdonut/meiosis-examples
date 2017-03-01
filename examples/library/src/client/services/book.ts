import { Promise } from "es6-promise";
import { Ajax } from "./ajax";
import { ajax } from "./ajax-axios";
import { Book } from "../../persistence";

export interface BookServices {
  loadBooks: () => Promise<Array<Book>>;
}

export const bookServices: BookServices = {
  loadBooks: () => ajax.getJSON<Array<Book>>("/examples/library/api/books")
};
