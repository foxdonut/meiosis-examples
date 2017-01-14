import { Scanner } from "meiosis";
import { ReactElement } from "react";
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

export interface Component<M, P> {
  initialModel?: M;
  receive: Scanner<M, P>;
}

export type Section = "circulation";

export interface LocationChange {
  type: "Root.LocationChange";
  url: string;
}

export interface UrlChanged {
  type: "Root.UrlChanged";
  url: string;
}

export interface LoadBookList {
  type: "Server.LoadBookList";
  section: Section;
}

export interface LoadedBookList {
  type: "Server.LoadedBookList";
  section: Section;
  books: Array<Book>;
}

export type Proposal = LocationChange | UrlChanged | LoadBookList | LoadedBookList;
