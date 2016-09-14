import objectPath from "object-path";
import { merge } from "ramda";

const nestComponent = path => config => ({
  initialModel: config.initialModel ? model => {
    objectPath.set(model, path, merge(objectPath.get(model, path), config.initialModel({})));
    return model;
  } : null,
  receive: config.receive ? (model, proposal) => {
    objectPath.set(model, path, config.receive(objectPath.get(model, path), proposal));
    return model;
  } : null,
  view: config.view,
  actions: config.actions,
  setup: config.setup,
  postRender: config.postRender ? model => config.postRender(objectPath.get(model, path)) : null,
  ready: config.ready,
  nextAction: config.nextAction ? (model, proposal, actions) =>
    config.nextAction(objectPath.get(model, path), proposal, actions) : null
});

export default nestComponent;
