import * as R from "ramda";

export const nestUpdate = (update, path) =>
  modelUpdate => update(R.over(R.lensProp(path), modelUpdate));

const nestFunction = (path, fn) =>
  model => fn(R.prop(path, model));

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
    return R.assoc(key, modifier(path, component[key]), result);
  }, {});
  return nestedComponent;
};

export const createComponents = (update, componentStructure, customConfig) =>
  Object.keys(componentStructure).reduce((result, path) =>
    R.assoc(
      path,
      nestComponent(R.prop(path, componentStructure), update, path, customConfig),
      result
    ), {});

export const combineComponents = (components, componentKey) =>
  model => Object.keys(components).reduce((result, key) => {
    const target = R.path([key, componentKey], components);
    if (target) {
      result = R.assoc(key, target(model), result);
    }
    return result;
  }, {});
