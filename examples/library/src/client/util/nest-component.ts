import * as objectPath from "object-path";
import { merge } from "ramda";
import { InitialModel, Config, Emitter } from "meiosis";
import { ComponentConfig, Model, Proposal, Propose } from "../root/types";

const nestComponent = (path: string) => (config: ComponentConfig): ComponentConfig => ({
  initialModel: config.initialModel ? (model: Model): Model => {
    objectPath.set(model, path, merge(objectPath.get(model, path), (<InitialModel<Model>>config.initialModel)({})));
    return model;
  } : null,
  receive: config.receive ? (model: Model, proposal: Proposal): Model => {
    objectPath.set(model, path, config.receive(objectPath.get(model, path), proposal));
    return model;
  } : null,
  view: config.view,
  actions: config.actions,
  setup: config.setup,
  postRender: config.postRender ? (model: Model): void => config.postRender(objectPath.get(model, path)) : null,
  ready: config.ready,
  nextAction: config.nextAction ? (model: Model, proposal: Proposal, actions: Propose): void =>
    config.nextAction(objectPath.get(model, path), proposal, actions) : null
});

export default nestComponent;
