import { Book } from "../../persistence";

export interface BookListModel {
  booksById?: { [id: string]: Book };
  bookIds?: Array<string>;
}

export interface Model {
  url?: string;
  tab?: string;
  inProgress?: boolean;
  circulation?: BookListModel;
}

export type Section = "circulation";
