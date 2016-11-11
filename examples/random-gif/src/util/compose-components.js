export const composeComponents = (configs, view) => {
  return {
    view: view(configs),
    initialModel: model => {
      Object.keys(configs).forEach(key => {
        model[key] = configs[key].initialModel({});
      });
      return model;
    },
    actions: propose => Object.keys(configs).reduce(
      (allActions, key) => {
        allActions[key] = configs[key].actions(propose);
        return allActions;
      }, {}
    ),
    receive: (model, proposal) => {
      Object.keys(configs).forEach(key => {
        model[key] = configs[key].receive(model[key], proposal);
      });
      return model;
    }
  };
};
