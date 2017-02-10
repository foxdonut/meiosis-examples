import { map, stream } from "meiosis";

export * from "./ajax-axios";

export const nest = path => modelChange => model => {
  model[path] = modelChange(model[path]);
  return model;
};

export const mergeAll = streams => {
  const merged = stream();
  streams.forEach(s => map(merged, s));
  return merged;
};
