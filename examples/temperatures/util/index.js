import flyd from "flyd";
import { createMergeIntoOne, createScan } from "meiosis";
import objectPath from "object-path";

export const mergeIntoOne = createMergeIntoOne(flyd);
export const scan = createScan(flyd);

export const nest = (path, modelChanges) =>
  modelChanges.map(modelChange => model => {
    objectPath.set(model, path, modelChange(objectPath.get(model, path)));
    return model;
  });
