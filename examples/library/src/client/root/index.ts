import { MeiosisInstance, MeiosisApp, Scanner, Stream, newInstance, on, stream } from "meiosis";
import { Component, Model, Proposal } from "./types";
import { initialModel } from "./model";
import { rootReceive } from "./receive";
import { urlHandler } from "../common";
import { ajax, createBookServices } from "../services";
import { createCirculation } from "../circulation";

export const meiosis: MeiosisInstance<Model, Proposal> = newInstance<Model, Proposal>();
export const propose: Stream<Proposal> = meiosis.propose;

export const receive: (variant: string) => Scanner<Model, Proposal> = (variant: string) => {
  const url = urlHandler("mithril");

  return (model: Model, proposal: Proposal) => {
    model = rootReceive(model, proposal);
    model = url.receive(model, proposal);
    return model;
  };
};

const createRoot: (variant: string) => Component<Model, Proposal> = (variant: string) => ({
  initialModel,
  receive: receive(variant)
});

export function createApp(variant: string): MeiosisApp {
  const root = createRoot(variant);
  return meiosis.run({
    initialModel: root.initialModel,
    scanner: { model: root.receive },
    nextAction: circulation.nextAction
  });
}

const bookServices = createBookServices(ajax);
const circulation = createCirculation(bookServices);

export * from "./types";
