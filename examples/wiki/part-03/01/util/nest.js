import _ from "lodash/fp";

export const nestUpdate = (update, path) =>
  modelUpdate => update(_.update(path, modelUpdate));

const nestFunction = (path, fn) =>
  model => fn(_.get(path, model));

const noNest = (path, fn) => fn;

const defaultConfig = {
  view: nestFunction
};

export const nestComponent = (create, update, path, customConfig) => {
  const config = customConfig
    ? Object.assign({}, defaultConfig, customConfig)
    : defaultConfig;

  const component = create(nestUpdate(update, path));
  const nestedComponent = Object.keys(component).reduce((result, key) => {
    const modifier = _.defaultTo(noNest, config[key]);
    return _.set(key, modifier(path, component[key]), result);
  }, {});
  return nestedComponent;
};

export const createComponents = (update, componentStructure, customConfig) =>
  Object.keys(componentStructure).reduce((result, path) =>
    _.set(
      path,
      nestComponent(_.get(path, componentStructure), update, path, customConfig),
      result
    ), {});

export const combineComponents = (components, componentKey) =>
  model => Object.keys(components).reduce((result, key) => {
    const target = _.get([key, componentKey], components);
    if (target) {
      result = _.set(key, target(model), result);
    }
    return result;
  }, {});
