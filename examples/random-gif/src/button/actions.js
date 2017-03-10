import { assoc } from "ramda";

export const toggle = update => () => update(model =>
  assoc("active", !model.active, model));
