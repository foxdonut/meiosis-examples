import objectPath from "object-path";

export const nestComponent = path => component => ({
  initialModel: component.initialModel ? model => {
    objectPath.set(model, path, Object.assign(objectPath.get(model, path) || {}, component.initialModel({})));
    return model;
  } : null,
  receive: component.receive ? (model, proposal) => {
    objectPath.set(model, path, component.receive(objectPath.get(model, path) || {}, proposal));
    return model;
  } : null,
  view: component.view,
  actions: component.actions,
  postRender: component.postRender ? model => component.postRender(objectPath.get(model, path)) : null,
  ready: component.ready,
  nextAction: component.nextAction ? (model, proposal, actions) =>
    component.nextAction(objectPath.get(model, path), proposal, actions) : null
});
