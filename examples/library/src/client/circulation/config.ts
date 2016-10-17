import { view } from "./view";
import { CirculationActions, createActions } from "./actions";
import { ComponentConfig } from "../root/types";

function circulationConfig(): ComponentConfig<CirculationActions> {
  return {
    view,
    actions: createActions()
  };
}

export { circulationConfig };
