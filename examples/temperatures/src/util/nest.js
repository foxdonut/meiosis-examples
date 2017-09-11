import _ from "lodash";

export const nestUpdate = (update, path) => modelChange =>
  update(model => _.update(model, path, modelChange));

const nestFunction = (path, fn) => model => fn(_.get(model, path));
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
      result[path] = nestComponent(create, update, _.concat(parentPath, path), customConfig);
    }
    else {
      result[path] = subCreateComponents(update, create, _.concat(parentPath, path), customConfig);
    }
    return result;
  }, {});

export const createComponents = (update, componentStructure, customConfig) =>
  subCreateComponents(update, componentStructure, [], customConfig);

const subCombineComponents = (componentKey, components, parentPath) =>
  model => Object.keys(components).reduce((result, path) => {
    const component = components[path];
    const fn = component[componentKey];
    if (typeof fn === "function") {
      result[path] = fn(_.get(model, path));
    }
    else {
      result[path] = subCombineComponents(componentKey, component, _.concat(parentPath, path))(_.get(model, parentPath));
    }
    return result;
  }, {});

export const combineComponents = (componentKey, components) =>
  subCombineComponents(componentKey, components, []);
