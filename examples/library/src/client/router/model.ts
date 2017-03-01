import { Stream } from "meiosis";
import { actions } from "./actions";

const route = actions.route.map((route: string) => (model: any) => {
  model.route = route;
  return model;
});

export const modelChanges = route;
