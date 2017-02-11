export * from "./ajax-axios";

export const nest = path => modelChange => model => {
  model[path] = modelChange(model[path]);
  return model;
};
