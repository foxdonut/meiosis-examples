import { createMergeIntoOne, createScan } from "meiosis";
import { over, lensProp } from "ramda";
import stream from "mithril/stream";

export const streamLibrary = { stream: stream, combine: stream.combine };

export const mergeIntoOne = createMergeIntoOne(streamLibrary);
export const scan = createScan(streamLibrary);

export const nest = (path, modelChanges) =>
  modelChanges.map(modelChange => model => over(lensProp(path), modelChange, model));
