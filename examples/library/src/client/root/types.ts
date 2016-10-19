import { Config, Emitter, View } from "meiosis";
import { ReactElement } from "react";
import { Book } from "../../persistence/book";

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

export interface UrlChange {
  type: "Root.UrlChange";
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

export type Proposal = UrlChange | UrlChanged | LoadBookList | LoadedBookList;

export type VDom = ReactElement<any>;
export type Propose = Emitter<Proposal>;
export type ComponentConfig<M, A> = Config<M, VDom, Proposal, A>;
export type View<M, A> = View<M, VDom, Proposal, A>;
