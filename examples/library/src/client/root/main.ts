import { Config } from "meiosis";
import { Model, initialModel } from "./model";
import { View, view } from "./view";
import { Proposal } from "./proposal";
import { initRoutes } from "./routes";

function rootConfig(): Config<Model, View, Proposal> {
  return {
    initialModel: initialModel(),
    view,
    ready: initRoutes
  };
}

export { rootConfig };
