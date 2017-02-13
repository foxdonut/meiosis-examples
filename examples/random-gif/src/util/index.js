import { createMergeIntoOne, createScan } from "meiosis";
import stream from "mithril/stream";

export const nest = path => modelChange => model => {
  model[path] = modelChange(model[path]);
  return model;
};

export const streamLibrary = { stream: stream, combine: stream.combine };

export const mergeIntoOne = createMergeIntoOne(streamLibrary);
export const scan = createScan(streamLibrary);
