import { Config, Emitter } from "meiosis";
import { ReactElement } from "react";
import { Book } from "../../persistence/book";

export interface Model {
  books?: Array<Book>;
}

export interface Proposal {
  type: string,
  payload?: any
}

export type View = ReactElement<any>;
export type Propose = Emitter<Proposal>;
export type ComponentConfig = Config<Model, View, Proposal, Propose>;

