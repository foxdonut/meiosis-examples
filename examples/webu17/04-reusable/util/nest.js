export const nest = (update, path) =>
  modelUpdate => update(model => {
    model[path] = modelUpdate(model[path]);
    return model;
  });
