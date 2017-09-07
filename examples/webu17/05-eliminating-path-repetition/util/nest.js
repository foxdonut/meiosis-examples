export const nestUpdate = (update, path) =>
  modelUpdate => update(model => {
    model[path] = modelUpdate(model[path]);
    return model;
  });

const nestFunction = (path, fn) =>
  model => fn(model[path]);

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
    const modifier = config[key] || noNest;
    result[key] = modifier(path, component[key]);
    return result;
  }, {});
  return nestedComponent;
};

export const createComponents = (update, componentStructure, customConfig) =>
  Object.keys(componentStructure).reduce((result, path) => {
    result[path] = nestComponent(componentStructure[path], update, path, customConfig);
    return result;
  }, {});

export const combineComponents = (componentKey, components) =>
  model => Object.keys(components).reduce((result, key) => {
    const target = components[key][componentKey];
    if (target) {
      result[key] = target(model);
    }
    return result;
  }, {});
