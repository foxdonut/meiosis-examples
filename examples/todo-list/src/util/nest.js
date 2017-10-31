import * as R from "ramda";

export const nestUpdate = (update, path) => modelChange =>
  update(R.over(R.lensPath(path), modelChange));

const nestFunction = (path, fn) => model => fn(R.path(path, model));
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

const subCreateComponents = (update, componentStructure, parentPath, customConfig) =>
  Object.keys(componentStructure).reduce((result, path) => {
    const create = componentStructure[path];

    if (typeof create === "function") {
      result[path] = nestComponent(create, update, R.concat(parentPath, [path]), customConfig);
    }
    else {
      result[path] = subCreateComponents(update, create, R.concat(parentPath, [path]), customConfig);
    }
    return result;
  }, {});

export const createComponents = (update, componentStructure, customConfig) =>
  subCreateComponents(update, componentStructure, [], customConfig);

const subCombineComponents = (components, componentKey, parentPath) =>
  model => Object.keys(components).reduce((result, path) => {
    const component = components[path];
    const fn = component[componentKey];
    if (typeof fn === "function") {
      result[path] = fn(R.path(path, model));
    }
    else {
      result[path] = subCombineComponents(component, componentKey, R.concat(parentPath, [path]))(R.path(parentPath, model));
    }
    return result;
  }, {});

export const combineComponents = (components, componentKey) =>
  subCombineComponents(components, componentKey, []);
