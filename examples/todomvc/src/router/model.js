import { actions } from "./actions";

const route = actions.route.map(route => model => {
  model.route = route;
  return model;
});

export const modelChanges = route;
