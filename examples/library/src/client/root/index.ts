import { MeiosisInstance, Scanner, Stream, newInstance } from "meiosis";
import { Component, Model, Proposal } from "./types";
import { initialModel } from "./model";
import { rootReceive } from "./receive";
import { urlHandler } from "../common";

export const meiosis: MeiosisInstance<Model, Proposal> = newInstance<Model, Proposal>();
export const propose: Stream<Proposal> = meiosis.propose;

export const receive: (variant: String) => Scanner<Model, Proposal> = (variant: String) => {
  const url = urlHandler("mithril");

  return (model: Model, proposal: Proposal) => {
    model = rootReceive(model, proposal);
    model = url.receive(model, proposal);
    return model;
  };
};

export const createRoot: (variant: String) => Component<Model, Proposal> = (variant: String) => ({
  initialModel,
  receive: receive(variant)
});

export * from "./types";
