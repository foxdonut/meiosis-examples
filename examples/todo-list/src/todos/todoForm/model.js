import { objOf } from "ramda";

export const model = id => objOf(id, {
  todo: {},
  validationErrors: {}
});
