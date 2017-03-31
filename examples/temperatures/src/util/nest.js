import _ from "lodash";

export const nest = (update, path) => modelChange =>
  update(model => _.update(model, path, modelChange));
