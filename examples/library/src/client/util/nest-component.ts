import * as objectPath from "object-path";
import { merge } from "ramda";
import { Config, Context, Emitter, InitialModel } from "meiosis";
import { ComponentConfig, Proposal } from "../root/types";

const nestComponent = <V, A>(path: string) => (config: ComponentConfig<any, V, A>): ComponentConfig<any, V, A> => ({
  initialModel: config.initialModel ? (model: any): any => {
    objectPath.set(model, path, merge(objectPath.get(model, path), (<InitialModel<any>>config.initialModel)({})));
    return model;
  } : null,
  receive: config.receive ? (model: any, proposal: Proposal): any => {
    objectPath.set(model, path, config.receive(objectPath.get(model, path), proposal));
    return model;
  } : null,
  view: config.view,
  actions: config.actions,
  postRender: config.postRender ? (model: any): void => config.postRender(objectPath.get(model, path)) : null,
  ready: config.ready,
  nextAction: config.nextAction ? (context: Context<any, Proposal, A>): void =>
    config.nextAction({ model: objectPath.get(context.model, path), proposal: context.proposal, actions: context.actions }) : null
});

export default nestComponent;
