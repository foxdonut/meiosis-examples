import flyd from "flyd";
import { over, lensProp } from "ramda";
import { createMergeIntoOne, createScan } from "meiosis";

export const mergeIntoOne = createMergeIntoOne(flyd);
export const scan = createScan(flyd);

export const nest = (path, modelChanges) =>
  modelChanges.map(modelChange => model => over(lensProp(path), modelChange, model));
