import { applyModelChange, Mapper, Scanner, Stream, trace } from "meiosis";

import { ajax, createBookServices } from "../services";
import { createCirculation } from "../circulation";
import { createServer } from "../sinonServer";
import { initialModel } from "./model";
import { mergeIntoOne, scan, streamLibrary } from "../util";
import { Model } from "./types";
import { rootReceive } from "./receive";
import { createUrlHandler } from "../util";

export * from "./types";

/*
export const receive: (variant: string) => Scanner<Model, Proposal> = (variant: string) => {
  const url = urlHandler(variant);

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

const nextAction = (model: Model, proposal: Proposal) => {
  circulation.nextAction(model, proposal);
};
*/

export function startApp(variant: string, view: Function, render: Function): void {
  createServer();

  const modelChanges: Stream<Mapper<Model, Model>> = streamLibrary.stream<Mapper<Model, Model>>();
  const model: Stream<Model> = scan(applyModelChange, initialModel, modelChanges);

  trace({ streamLibrary, modelChanges, streams: [ model ] });

  const element: Element = document.getElementById("app");
  model.map(model => render(element, view(model)));
}

/*
const bookServices = createBookServices(ajax);
const circulation = createCirculation(bookServices);
*/
