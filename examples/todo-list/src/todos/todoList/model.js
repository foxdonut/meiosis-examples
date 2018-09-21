import { objOf } from "ramda";

export const model = id => todos => objOf(id, {
  todos,
  message: ""
});
