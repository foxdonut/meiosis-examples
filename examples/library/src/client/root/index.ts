import { Component, Model, Proposal } from "./types";
import { initialModel } from "./model";
import { receive } from "./receive";

export const root: Component<Model, Proposal> = {
  initialModel,
  receive
};
