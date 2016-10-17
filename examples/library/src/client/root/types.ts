import { Config, Emitter, View } from "meiosis";
import { ReactElement } from "react";
import { Book } from "../../persistence/book";

export interface Model {
  url?: string;
  tab?: string;
  booksById?: { [id: string]: Book };
  bookIds?: Array<string>;
}

export interface Proposal {
  type: string,
  url?: string,
  tab?: string,
  payload?: any
}

export type VDom = ReactElement<any>;
export type Propose = Emitter<Proposal>;
export type ComponentConfig<A> = Config<Model, VDom, Proposal, A>;
export type View = View<Model, VDom, Proposal, Propose>;
