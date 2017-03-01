import { Stream } from "meiosis";
import { Model } from "../app/types";

import * as actions from "./actions";
import * as model from "./model";
import * as routes from "./routes";

export const orders = {
  ...model,
  ...actions,
  ...routes
};
