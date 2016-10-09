import { Config } from "meiosis";
import { Model, initialModel } from "./model";
import { View, view } from "./view";
import { Proposal } from "./proposal";

function rootConfig(): Config<Model, View, Proposal> {
  return {
    initialModel: initialModel(),
    view
  };
}

export { rootConfig };
