import { Book } from "../../persistence";

export interface BookListModel {
  booksById?: { [id: string]: Book };
  bookIds?: Array<string>;
}

export interface Model {
  circulation?: BookListModel;
  inProgress?: boolean;
  route?: string;
  tab?: string;
}

export type Section = "circulation";
