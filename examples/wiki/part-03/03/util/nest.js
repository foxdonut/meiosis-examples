import R from "ramda";
import * as L from "partial.lenses";

export const nestUpdate = (update, path) =>
  modelUpdate => update(L.modify(path, modelUpdate));

const nestFunction = (path, fn) =>
  model => fn(L.get(path, model));

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
    const modifier = R.defaultTo(noNest, config[key]);
    return L.set(key, modifier(path, component[key]), result);
  }, {});
  return nestedComponent;
};

export const createComponents = (update, componentStructure, customConfig) =>
  Object.keys(componentStructure).reduce((result, path) =>
    L.set(
      path,
      nestComponent(L.get(path, componentStructure), update, path, customConfig),
      result
    ), {});

export const combineComponents = (components, componentKey) =>
  model => Object.keys(components).reduce((result, key) => {
    const target = L.get([key, componentKey], components);
    if (target) {
      result = L.set(key, target(model), result);
    }
    return result;
  }, {});
