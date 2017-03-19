import { Promise } from "es6-promise";
import * as actions from "./actions";
import * as routes from "./routes";

export const footer = {
  ...actions,
  ...routes
};
