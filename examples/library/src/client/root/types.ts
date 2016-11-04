import { Component, Config, Emitter, View } from "meiosis";
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
export type Propose = Emitter<Proposal>;
export type View<M, V, A> = View<M, V, Proposal, A>;
export type ComponentConfig<M, V, A> = Config<M, M, V, Proposal, A>;

export interface RootViews<V> {
  progressDialog: Component<Model, V>;
  circulation: Component<BookListModel, V>;
}
