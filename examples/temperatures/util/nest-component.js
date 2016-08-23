import objectPath from "object-path";

const nestComponent = (config, path) => ({
  initialModel: model => {
    objectPath.set(model, path, config.initialModel({}));
    return model;
  },
  receive: (model, proposal) => {
    config.receive(objectPath.get(model, path), proposal);
    return model;
  },
  view: (model, propose) => config.view(objectPath.get(model, path), propose)
});

export default nestComponent;
