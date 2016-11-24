export const composeComponents = (components, view) => {
  return {
    view: view(components),
    initialModel: model => {
      Object.keys(components).forEach(key => {
        model[key] = components[key].initialModel({});
      });
      return model;
    },
    actions: propose => Object.keys(components).reduce(
      (allActions, key) => {
        allActions[key] = components[key].actions(propose);
        return allActions;
      }, {}
    ),
    receive: (model, proposal) => {
      Object.keys(components).forEach(key => {
        model[key] = components[key].receive(model[key], proposal);
      });
      return model;
    }
  };
};
