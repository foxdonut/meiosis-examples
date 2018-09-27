const getFn = (component, prop) => component[prop] || (() => ({}));
const getKey = dependency => Object.keys(dependency)[0];
const getComponent = dependency => Object.values(dependency)[0];

export const wireModel = (component, data, model = {}) => {
  Object.assign(model, getFn(component, "model")(data));
  (component.dependencies || []).forEach(dependency => {
    wireModel(getComponent(dependency), data, model);
  });
  return model;
};

export const wireActions = (component, update, actions = {}) => {
  Object.assign(actions, getFn(component, "actions")(update, actions));
  (component.dependencies || []).forEach(dependency => {
    wireActions(getComponent(dependency), update, actions);
  });
  return actions;
};

export const wireView = (component, actions) => {
  const dependencies = {};
  (component.dependencies || []).forEach(dependency => {
    dependencies[getKey(dependency)] = wireView(getComponent(dependency), actions);
  });
  return getFn(component, "view")(Object.assign({ actions }, dependencies));
};
