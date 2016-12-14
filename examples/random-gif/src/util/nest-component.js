import objectPath from "object-path";

export const nestComponent = path => component => ({
  initialModel: component.initialModel ? model => {
    objectPath.set(model, path, Object.assign(objectPath.get(model, path) || {}, component.initialModel({})));
    return model;
  } : null,
  state: component.state ? (model, state) => {
    objectPath.set(state, path, component.state(objectPath.get(model, path) || {}, objectPath.get(state, path) || {}));
    return state;
  } : null,
  receive: component.receive ? (model, proposal) => {
    objectPath.set(model, path, component.receive(objectPath.get(model, path) || {}, proposal));
    return model;
  } : null,
  view: (model, propose) => component.view(objectPath.get(model, path), propose),
  actions: component.actions,
  postRender: component.postRender ? model => component.postRender(objectPath.get(model, path)) : null,
  ready: component.ready,
  nextAction: component.nextAction ? (model, proposal, actions) =>
    component.nextAction(objectPath.get(model, path), proposal, actions) : null
});
