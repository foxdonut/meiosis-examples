import { Stream } from "meiosis";

import { Model } from "../app/types";
import { actions } from "./actions";

export const modelChanges = actions.ordersTab.map(() => (model: Model) => {
  model.tab = "orders";
  return model;
});
